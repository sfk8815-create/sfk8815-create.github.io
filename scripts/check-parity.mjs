#!/usr/bin/env node
// ============================================================================
// scripts/check-parity.mjs — 站点一致性自检（S3-q1 · 可复用）
//
// 零依赖：只用 Node 内置 fs / path / url（禁装任何包）。
// 运行：npm run check:parity   （可选 --json 输出机器可读结果）
// 退出码：全部 PASS = 0；任一 FAIL = 1。
//
// 防"裸标签 / 数字漂移 / 键不齐"三类回归（真实事故驱动）：
//   ① 五语键齐   src/i18n/index.tsx 的 dict（sc/tc/en/ko/ja）键集合相等、无空值
//   ② 数字口径   约定值必须出现（2148 / 9.2 / 9 套|Nine themes）；
//                旧值零残留（38×|38x、42×、91.8、10 套、Ten themes）；
//                403 唯一例外 = src/components/socialIcons.tsx（白名单）
//   ③ 禁用词     符合标准 / 无损映射 / 需系统编码器 / compliant / conformance
//                （英文词按"正向声明"计数：no/not/non- 引导的否定不计）；
//                且 字段对照核对中|欄位對照核對中|under review 合计 ≥3（三语各一）；
//                旧定位语零残留（音频分析软件 / 音訊分析軟體 / audio analysis application 各 0；S3-t1）
//   ④ 渲染面     src/** 中 dangerouslySetInnerHTML = 0；indexOf('</b>') = 0；
//                若 src/data/*.ts 含 <b>，则 HelpPage.tsx 必须含 renderRich
//   ⑤ 帮助页结构 quickstart.ts 五语各 14 条；manual.ts 五语各 19 节、
//                逐节条数五语一致（第 18 节为 tables，条数 = 表行数合计）
//   ⑥ 汇总       逐项 PASS/FAIL + 明细（文件:行）；任一 FAIL → exit 1
//
// 只读子仓内文件（相对本脚本所在仓库根），不依赖主仓任何路径。
// ============================================================================

import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const JSON_OUT = process.argv.includes('--json')

// ---------------------------------------------------------------- 基础工具 --

function read(rel) {
  return readFileSync(path.join(ROOT, rel), 'utf8')
}

function listFiles(relDir) {
  const abs = path.join(ROOT, relDir)
  const out = []
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      if (name === 'node_modules' || name === 'dist') continue
      const p = path.join(d, name)
      const st = statSync(p)
      if (st.isDirectory()) walk(p)
      else out.push(path.relative(ROOT, p).split(path.sep).join('/'))
    }
  }
  walk(abs)
  return out.sort()
}

const SRC_FILES = listFiles('src')

/** 逐行扫描：返回 [{line, text}]（保留行号用于明细） */
function linesOf(file) {
  return read(file).split('\n')
}

/** 在文件内按正则计数（逐行匹配，避免跨行误配），返回 {count, hits:[{line, text}]} */
function countRe(file, re) {
  const hits = []
  linesOf(file).forEach((text, i) => {
    let m
    const local = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
    while ((m = local.exec(text)) !== null) {
      hits.push({ line: i + 1, text: text.trim().slice(0, 80) })
      if (m.index === local.lastIndex) local.lastIndex++
    }
  })
  return { count: hits.length, hits }
}

/** 全 src/** 扫描（可带白名单文件） */
function scanAll(re, { whitelist = [] } = {}) {
  const hits = []
  let whitelisted = 0
  for (const f of SRC_FILES) {
    const r = countRe(f, re)
    if (whitelist.includes(f)) { whitelisted += r.count; continue }
    for (const h of r.hits) hits.push({ file: f, ...h })
  }
  return { count: hits.length, whitelisted, hits }
}

// ------------------------------------------- 轻量对象字面量解析（零依赖） --
// 覆盖本仓数据文件的子集：{ key: value } / [ ... ] / '字符串' / "字符串" / 数字。
// 仅用于结构计数（键集合、条数），不做语义求值。

function parseLiteral(src, start) {
  const skipWs = (i) => {
    for (;;) {
      while (i < src.length && /\s/.test(src[i])) i++
      if (src.startsWith('//', i)) { while (i < src.length && src[i] !== '\n') i++ }
      else if (src.startsWith('/*', i)) { const e = src.indexOf('*/', i); i = e === -1 ? src.length : e + 2 }
      else break
    }
    return i
  }
  const parseString = (i) => {
    const q = src[i]; i += 1
    let out = ''
    while (i < src.length) {
      const c = src[i]
      if (c === '\\') { out += src[i + 1]; i += 2; continue }
      if (c === q) return [out, i + 1]
      out += c; i++
    }
    throw new Error(`unterminated string at ${i}`)
  }
  const parseKey = (i) => {
    i = skipWs(i)
    if (src[i] === '"' || src[i] === "'") return parseString(i)
    const m = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(src.slice(i))
    if (!m) throw new Error(`bad key at offset ${i}`)
    return [m[0], i + m[0].length]
  }
  // TS 类型断言后缀（如 `] as ManualSection[]`）：值解析完成后跳过
  const skipAs = (i) => {
    i = skipWs(i)
    const m = /^as\s+[A-Za-z_$][\w$.]*(?:<[^>]*>)?(?:\[\])*/.exec(src.slice(i))
    return m ? i + m[0].length : i
  }
  const parseValue = (i) => {
    i = skipWs(i)
    const c = src[i]
    if (c === '{') {
      i += 1
      const obj = {}
      for (;;) {
        i = skipWs(i)
        if (src[i] === '}') return [obj, i + 1]
        const [k, ni] = parseKey(i)
        const j = skipWs(ni)
        if (src[j] !== ':') throw new Error(`expected ':' at offset ${j}`)
        const [v, mi] = parseValue(j + 1)
        obj[k] = v
        i = skipAs(mi)
        if (src[i] === ',') { i += 1; continue }
        if (src[i] === '}') return [obj, i + 1]
        throw new Error(`expected ',' or '}' at offset ${i}`)
      }
    }
    if (c === '[') {
      i += 1
      const arr = []
      for (;;) {
        i = skipWs(i)
        if (src[i] === ']') return [arr, i + 1]
        const [v, mi] = parseValue(i)
        arr.push(v)
        i = skipAs(mi)
        if (src[i] === ',') { i += 1; continue }
        if (src[i] === ']') return [arr, i + 1]
        throw new Error(`expected ',' or ']' at offset ${i}`)
      }
    }
    if (c === '"' || c === "'") return parseString(i)
    const m = /^[^,}\]]+/.exec(src.slice(i)) // 数字等标量兜底
    return [m ? m[0].trim() : '', i + (m ? m[0].length : 1)]
  }
  return parseValue(skipWs(start))
}

/** 从源码中定位 `const NAME ... = {` 并解析该对象字面量 */
function extractObject(src, name) {
  const re = new RegExp(`(?:export\\s+)?const\\s+${name}\\b[^=]*=\\s*\\{`)
  const m = re.exec(src)
  if (!m) throw new Error(`object literal "${name}" not found`)
  return parseLiteral(src, m.index + m[0].length - 1)[0]
}

/** 扁平化键路径（数组用数字下标），叶子 = 非对象值 */
function flattenKeys(obj, prefix = '') {
  const out = []
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k
    if (v !== null && typeof v === 'object') out.push(...flattenKeys(v, p))
    else out.push(p)
  }
  return out
}

const setDiff = (a, b) => a.filter((x) => !b.includes(x))

// ---------------------------------------------------------------- 检查项 --

const results = []
function record(name, pass, details) {
  results.push({ name, pass, details })
}

// ---- ① 五语键齐（src/i18n/index.tsx dict：sc/tc/en/ko/ja 键集合相等、无空值） ----
{
  const details = []
  let pass = true
  try {
    const dict = extractObject(read('src/i18n/index.tsx'), 'dict')
    const langs = ['sc', 'tc', 'en', 'ko', 'ja']
    for (const l of langs) {
      if (!dict[l] || typeof dict[l] !== 'object') { details.push(`FAIL: dict 缺少 ${l} 段`); pass = false }
    }
    if (pass) {
      const flat = {}
      for (const l of langs) flat[l] = flattenKeys(dict[l])
      const base = flat.sc
      for (const l of ['tc', 'en', 'ko', 'ja']) {
        const onlyBase = setDiff(base, flat[l])
        const onlyOther = setDiff(flat[l], base)
        if (onlyBase.length || onlyOther.length) {
          pass = false
          details.push(`FAIL: ${l} 与 sc 键不齐 — 仅sc有: [${onlyBase.slice(0, 8).join(', ')}] 仅${l}有: [${onlyOther.slice(0, 8).join(', ')}]（各 ${onlyBase.length}/${onlyOther.length}）`)
        }
      }
      details.push(`键数 sc=${flat.sc.length} tc=${flat.tc.length} en=${flat.en.length} ko=${flat.ko.length} ja=${flat.ja.length}`)
      // 无空值（叶子字符串 trim 后非空）
      const empties = []
      const walk = (obj, prefix, l) => {
        for (const [k, v] of Object.entries(obj)) {
          const p = prefix ? `${prefix}.${k}` : k
          if (v !== null && typeof v === 'object') walk(v, p, l)
          else if (typeof v === 'string' && v.trim() === '') empties.push(`${l}:${p}`)
        }
      }
      for (const l of langs) walk(dict[l], '', l)
      if (empties.length) { pass = false; details.push(`FAIL: 空值 ${empties.length} 处 — [${empties.slice(0, 8).join(', ')}]`) }
      else details.push('无空值 ✓')
    }
  } catch (e) {
    pass = false
    details.push(`FAIL: 解析 src/i18n/index.tsx dict 失败 — ${e.message}`)
  }
  record('① 五语键齐（i18n dict sc/tc/en/ko/ja）', pass, details)
}

// ---- ② 数字口径（src/**；403 白名单 = socialIcons.tsx） ----
{
  const details = []
  let pass = true
  const SW = 'src/components/socialIcons.tsx' // 403 唯一例外：SVG 路径几何数据
  const required = [
    { label: '2148', re: /(?<![0-9])2148(?![0-9])/ },
    { label: '9.2', re: /(?<![0-9.])9\.2(?![0-9])/ },
    { label: '9 套|Nine themes', re: /(?<![0-9])9 套|\bNine themes\b/ },
  ]
  for (const r of required) {
    const s = scanAll(r.re)
    if (s.count === 0) { pass = false; details.push(`FAIL: 约定值「${r.label}」未出现（src/** 0 命中）`) }
    else details.push(`约定值「${r.label}」出现 ${s.count} 次 ✓`)
  }
  const stale = [
    { label: '38×|38x', re: /(?<![0-9])38[×x](?![0-9])/ },
    { label: '42×', re: /(?<![0-9])42×(?![0-9])/ },
    { label: '91.8', re: /(?<![0-9.])91\.8(?![0-9])/ },
    { label: '10 套', re: /(?<![0-9])10 套/ },
    { label: 'Ten themes', re: /\bTen themes\b/ },
  ]
  for (const s of stale) {
    const r = scanAll(s.re)
    if (r.count > 0) {
      pass = false
      details.push(`FAIL: 旧值「${s.label}」残留 ${r.count} 处 — [${r.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
    } else details.push(`旧值「${s.label}」零残留 ✓`)
  }
  {
    const r = scanAll(/403/, { whitelist: [SW] })
    if (r.count > 0) {
      pass = false
      details.push(`FAIL: 「403」在白名单外命中 ${r.count} 处 — [${r.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
    } else details.push(`「403」仅白名单 ${SW}（${r.whitelisted} 处 SVG 几何数据），其余零命中 ✓`)
  }
  record('② 数字口径（2148/9.2/9套 · 旧值零残留 · 403白名单）', pass, details)
}

// ---- ③ 禁用词（src/**；英文词按正向声明计数） ----
{
  const details = []
  let pass = true
  // 中文禁用词：子串计数，各 0
  for (const w of ['符合标准', '无损映射', '需系统编码器']) {
    const r = scanAll(new RegExp(w))
    if (r.count > 0) {
      pass = false
      details.push(`FAIL: 禁用词「${w}」命中 ${r.count} 处 — [${r.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
    } else details.push(`禁用词「${w}」0 命中 ✓`)
  }
  // 英文禁用词：total − 否定（no/not/non- 引导）= 正向声明数，须为 0
  for (const w of ['compliant', 'conformance']) {
    let total = 0, negated = 0
    const hits = []
    for (const f of SRC_FILES) {
      linesOf(f).forEach((text, i) => {
        const re = new RegExp(w, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          total++
          const before = text.slice(Math.max(0, m.index - 8), m.index)
          if (/(?:no|not)\s+$/i.test(before) || /non-$/i.test(before)) negated++
          else hits.push({ file: f, line: i + 1, text: text.trim().slice(0, 80) })
          if (m.index === re.lastIndex) re.lastIndex++
        }
      })
    }
    const positive = total - negated
    if (positive > 0) {
      pass = false
      details.push(`FAIL: 禁用词「${w}」正向声明 ${positive} 处（总 ${total}，否定 ${negated}）— [${hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
    } else details.push(`禁用词「${w}」正向 0（总 ${total}，其中否定 ${negated} 不计）✓`)
  }
  // S3-t1：旧定位语零残留（音频分析软件 / 音訊分析軟體 / audio analysis application 各 0；老术语不再出现）
  for (const w of ['音频分析软件', '音訊分析軟體', 'audio analysis application']) {
    const r = scanAll(new RegExp(w, w === 'audio analysis application' ? 'i' : ''))
    if (r.count > 0) {
      pass = false
      details.push(`FAIL: 旧定位语「${w}」残留 ${r.count} 处 — [${r.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
    } else details.push(`旧定位语「${w}」0 命中 ✓`)
  }
  // 限定语三语各一：合计 ≥3
  let qual = 0
  for (const w of ['字段对照核对中', '欄位對照核對中', 'under review']) qual += scanAll(new RegExp(w, w === 'under review' ? 'i' : '')).count
  if (qual < 3) { pass = false; details.push(`FAIL: 「字段对照核对中|欄位對照核對中|under review」合计 ${qual} < 3`) }
  else details.push(`限定语「…核对中/under review」合计 ${qual} ≥ 3（三语各一）✓`)
  record('③ 禁用词（符合标准/无损映射/需系统编码器/compliant/conformance/旧定位语零残留）', pass, details)
}

// ---- ④ 渲染面（src/**；S3-c2 事故项） ----
{
  const details = []
  let pass = true
  const dsi = scanAll(/dangerouslySetInnerHTML/)
  if (dsi.count > 0) {
    pass = false
    details.push(`FAIL: dangerouslySetInnerHTML 命中 ${dsi.count} 处 — [${dsi.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
  } else details.push('dangerouslySetInnerHTML = 0 ✓')

  const rawB = scanAll(/indexOf\(['"]<\/b>['"]\)/)
  if (rawB.count > 0) {
    pass = false
    details.push(`FAIL: indexOf('</b>') 裸标签处理残留 ${rawB.count} 处 — [${rawB.hits.slice(0, 5).map((h) => `${h.file}:${h.line}`).join(', ')}]`)
  } else details.push("indexOf('</b>') = 0 ✓")

  const dataFiles = SRC_FILES.filter((f) => /^src\/data\/.*\.ts$/.test(f))
  const bData = dataFiles.filter((f) => read(f).includes('<b>'))
  const help = read('src/components/HelpPage.tsx')
  if (bData.length > 0) {
    if (!help.includes('renderRich')) {
      pass = false
      details.push(`FAIL: src/data 含 <b>（${bData.join(', ')}）但 HelpPage.tsx 无 renderRich（裸标签会被当纯文本渲染）`)
    } else details.push(`src/data 含 <b>（${bData.length} 文件）→ HelpPage.tsx 已含 renderRich ✓`)
  } else details.push('src/data 无 <b>，renderRich 条件不适用')
  record('④ 渲染面（dangerouslySetInnerHTML / indexOf(\'</b>\') / renderRich）', pass, details)
}

// ---- ⑤ 帮助页结构（quickstart 五语各 14 条；manual 五语各 19 节、逐节一致） ----
{
  const details = []
  let pass = true
  try {
    const qs = extractObject(read('src/data/quickstart.ts'), 'QUICK_START')
    for (const l of ['sc', 'tc', 'en', 'ko', 'ja']) {
      const n = qs[l]?.items?.length ?? -1
      if (n !== 14) { pass = false; details.push(`FAIL: quickstart ${l} = ${n} 条（应 14）`) }
    }
    if (pass) details.push('quickstart 五语各 14 条 ✓')
  } catch (e) { pass = false; details.push(`FAIL: 解析 quickstart.ts 失败 — ${e.message}`) }

  try {
    const mn = extractObject(read('src/data/manual.ts'), 'MANUAL')
    const langs = ['sc', 'tc', 'en', 'ko', 'ja']
    let ok = true
    for (const l of langs) {
      const n = mn[l]?.sections?.length ?? -1
      if (n !== 19) { pass = false; ok = false; details.push(`FAIL: manual ${l} = ${n} 节（应 19）`) }
    }
    if (ok) {
      details.push('manual 五语各 19 节 ✓')
      // 逐节条数：items 节 = items.length；tables 节（第 18 节）= 表行数合计
      const entryCount = (sec) =>
        Array.isArray(sec.items) ? sec.items.length : (Array.isArray(sec.tables) ? sec.tables.reduce((s, t) => s + (t.rows?.length ?? 0), 0) : -1)
      let mismatch = 0
      for (let i = 0; i < 19; i++) {
        const counts = langs.map((l) => entryCount(mn[l].sections[i]))
        if (new Set(counts).size > 1) {
          mismatch++
          const kind = mn.sc.sections[i].tables ? 'tables' : 'items'
          details.push(`FAIL: 第 ${i + 1} 节（${kind}）条数五语不一致 sc/tc/en/ko/ja = ${counts.join('/')}`)
        }
      }
      if (mismatch === 0) details.push('逐节条数五语一致 ✓')
      // 第 18 节须为 tables
      for (const l of langs) {
        const s18 = mn[l].sections[17]
        if (!s18 || !Array.isArray(s18.tables) || Array.isArray(s18.items)) {
          pass = false
          details.push(`FAIL: manual ${l} 第 18 节非 tables 结构（title=${s18?.title ?? '∅'}）`)
        }
      }
      if (pass) details.push('第 18 节五语均为 tables（快捷键表）✓')
    }
  } catch (e) { pass = false; details.push(`FAIL: 解析 manual.ts 失败 — ${e.message}`) }
  record('⑤ 帮助页结构（quickstart 14×5 · manual 19节×5 逐节一致）', pass, details)
}

// ---- ⑥ 汇总输出 ----
const failed = results.filter((r) => !r.pass)

if (JSON_OUT) {
  console.log(JSON.stringify({ ok: failed.length === 0, checks: results }, null, 2))
} else {
  console.log('== check-parity：站点一致性自检（6 组） ==')
  for (const r of results) {
    console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}`)
    for (const d of r.details) console.log(`      ${d}`)
  }
  console.log('----------------------------------------')
  console.log(failed.length === 0
    ? `结果：6/6 PASS（exit 0）`
    : `结果：${results.length - failed.length}/6 PASS，${failed.length} FAIL（exit 1）— ${failed.map((f) => f.name).join(' | ')}`)
}

process.exit(failed.length === 0 ? 0 : 1)
