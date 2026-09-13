// 产品子页面数据（sovena / omarchy-academic / mcp-cockpit）
// 内容来自各仓库 README，双语（sc / en）供全站切换。
import type { Locale } from '../i18n'

export interface ProductNews {
  slug: string
  name: string        // 产品/品牌名（英文/主）
  zhName: string      // 中文名
  github: string
  accent: string      // 主打强调色（数据语义唯一主角）
  sc: {
    category: string
    tagline: string
    desc: string
    highlights: { title: string; desc: string }[]
    featureTitle: string
    featureDesc: string
    moreTitle: string
    moreDesc: string
    cta: string
  }
  en: {
    category: string
    tagline: string
    desc: string
    highlights: { title: string; desc: string }[]
    featureTitle: string
    featureDesc: string
    moreTitle: string
    moreDesc: string
    cta: string
  }
}

export const OTHER_PRODUCTS: ProductNews[] = [
  {
    slug: 'sovena',
    name: 'Sovena',
    zhName: '缙云文采',
    github: 'https://github.com/sfk8815-create/sovena',
    accent: '#2E9BFF',
    sc: {
      category: '文献流 · MCP',
      tagline: '把 Zotero 文献，变成 AI 可引用的语义库。',
      desc: 'Zotero → Markdown 语义文献包 → 向量检索。面向各学科学术研究的本地文献流处理系统，并以 MCP 服务暴露给任意本地 / 远程 AI 客户端——引文能精确溯源到「页」。',
      highlights: [
        { title: 'Zotero 深度接入', desc: '分类 / 条目 / 标注读取（本地 API，无需 Web API key），附带 Zotero 插件直达。' },
        { title: '文献全文转换', desc: '附件批量转为 AI 友好 Markdown，含【书页页码】标注，引用可溯源。' },
        { title: '扫描件 OCR', desc: 'Unlimited-OCR 结构化识别，MLX / GGUF 双后端，可远程。' },
        { title: '向量语义检索', desc: 'LanceDB + 任意 OpenAI 兼容 embedding（本地或远程商用平台）。' },
        { title: '增量处理', desc: '条目 version + 附件指纹双重检测，只处理新增 / 变更内容。' },
        { title: 'AI 深度阅读外脑', desc: 'Claude / Cherry Studio / Trae 等经 MCP 直查你的文献库，回答带出处。' },
      ],
      featureTitle: '一套完整的文献工作流',
      featureDesc: '从 Zotero 采集 → 全文转换 → OCR → 向量化 → 语义检索，到 AI 客户端统一接入。',
      moreTitle: '架构与生态',
      moreDesc: 'L1 文本路(pymupdf) / L2 OCR 路(MLX·GGUF) / 任意文档(anydoc)，汇入 LanceDB 向量库，经 Web 监管台(:8765) 与 MCP 端点(/mcp) 输出。',
      cta: '前往 GitHub',
    },
    en: {
      category: 'Literature Flow · MCP',
      tagline: 'Turn your Zotero library into a citable semantic corpus for AI.',
      desc: 'Zotero → Markdown semantic packs → vector retrieval. A local literature-flow system for academic research across disciplines, exposed as an MCP service to any AI client — citations trace back to the exact page.',
      highlights: [
        { title: 'Deep Zotero access', desc: 'Collections / items / annotations via the local API (no Web API key), plus a Zotero plugin.' },
        { title: 'Full-text conversion', desc: 'Batch-convert attachments to AI-friendly Markdown with 【page】 annotations for precise citation.' },
        { title: 'Scanned-document OCR', desc: 'Structured OCR via Unlimited-OCR, MLX / GGUF backends, any platform, remote-ready.' },
        { title: 'Vector semantic search', desc: 'LanceDB + any OpenAI-compatible embedding service (local or commercial).' },
        { title: 'Incremental processing', desc: 'Item version + attachment fingerprint, so only new or changed content is processed.' },
        { title: 'AI deep-reading brain', desc: 'Claude / Cherry Studio / Trae query your library over MCP with sourced answers.' },
      ],
      featureTitle: 'A complete literature workflow',
      featureDesc: 'From Zotero collection → full-text conversion → OCR → vectorization → semantic search, to unified AI-client access.',
      moreTitle: 'Architecture & ecosystem',
      moreDesc: 'L1 text path (pymupdf) / L2 OCR path (MLX·GGUF) / any document (anydoc), aggregated into a LanceDB vector store, served via a web console (:8765) and an MCP endpoint (/mcp).',
      cta: 'View on GitHub',
    },
  },
  {
    slug: 'omarchy-academic',
    name: 'Omarchy Academic',
    zhName: 'Omarchy 学研版',
    github: 'https://github.com/sfk8815-create/omarchy-academic',
    accent: '#7C5CFF',
    sc: {
      category: '操作系统 · 学术发行版',
      tagline: '为中文科研与学术场景而生的 Omarchy。',
      desc: '基于 Omarchy 4.0.1（Arch Linux + Hyprland + Quickshell）的中文学术发行版配置：中文环境 + 学术软件栈，开箱即用、一键安装、长期维护。',
      highlights: [
        { title: '中文系统区域', desc: 'zh_CN.UTF-8 + 中国时区，开箱即中文。' },
        { title: 'fcitx5 + Rime 输入法', desc: '雾凇拼音 rime-ice，含双拼等方案，`` `` 翻页。' },
        { title: '中文字体回退', desc: '拉丁字体缺字自动落到思源黑体，四个终端中文渲染。' },
        { title: '学术软件栈', desc: 'Zotero、Obsidian、Zettlr、Xournal++、LibreOffice/WPS、Tesseract 中文 OCR、Pandoc、TeX Live。' },
        { title: '默认集成 sovena + MCP Cockpit', desc: '文献流 + MCP 统一网关，构成完整学术工作流。' },
        { title: '模块化·可长期维护', desc: '一键安装 / 卸载、sync.sh 双向同步 + GitHub Actions CI。' },
      ],
      featureTitle: '中文、学术，都能开箱即用',
      featureDesc: '面向学术界，把 Omarchy 变成顺手的中文科研工作台。',
      moreTitle: '与 Omarchy 的关系',
      moreDesc: '本仓库是 Omarchy 之上的「增量覆盖层」，只安装/修改必要文件，尊重 Omarchy 自身升级；非官方项目，可随时 omarchy refresh 还原。可与面向开发者的 OmarchyCN 叠加共存。',
      cta: '前往 GitHub',
    },
    en: {
      category: 'OS · Academic Edition',
      tagline: 'An Omarchy built for Chinese academia.',
      desc: 'A Chinese academic edition of Omarchy 4.0.1 (Arch Linux + Hyprland + Quickshell): a localized environment plus an academic software stack, ready to use — one-click install, long-term maintenance.',
      highlights: [
        { title: 'Chinese system locale', desc: 'zh_CN.UTF-8 + China timezone, Chinese out of the box.' },
        { title: 'fcitx5 + Rime IME', desc: 'Rime-ice pinyin, including double-pinyin schemes.' },
        { title: 'CJK font fallback', desc: 'Latin fonts fall back to Noto Sans CJK; Chinese rendered in four terminals.' },
        { title: 'Academic software stack', desc: 'Zotero, Obsidian, Zettlr, Xournal++, LibreOffice/WPS, Tesseract OCR, Pandoc, TeX Live.' },
        { title: 'Ships sovena + MCP Cockpit', desc: 'Literature flow + unified MCP gateway for a complete academic workflow.' },
        { title: 'Modular & maintainable', desc: 'One-click install/uninstall, sync.sh two-way sync + GitHub Actions CI.' },
      ],
      featureTitle: 'Chinese and academic, out of the box.',
      featureDesc: 'Built for researchers — turn Omarchy into a comfortable Chinese research workstation.',
      moreTitle: 'Relation to Omarchy',
      moreDesc: 'This repo is an incremental overlay on Omarchy: it only installs/modifies what it needs and respects upstream upgrades; not an official project, and `omarchy refresh` restores at any time. Coexists with the developer-oriented OmarchyCN.',
      cta: 'View on GitHub',
    },
  },
  {
    slug: 'mcp-cockpit',
    name: 'MCP Cockpit',
    zhName: 'MCP Cockpit 驾驶舱',
    github: 'https://github.com/sfk8815-create/mcp-cockpit',
    accent: '#E8C97A',
    sc: {
      category: 'MCP · 网关管理台',
      tagline: '一份 MCP 配置，服务你所有的 AI 客户端。',
      desc: 'mcp-hub 网关的零依赖 Web 管理台 + 自动恢复看门狗。所有 MCP 服务器集中增删、刷新、测试；客户端只连一个统一端点——看得见、管得了、会自愈。',
      highlights: [
        { title: '一份配置，全端共享', desc: '所有客户端连同一个统一端点；新增服务器一处生效。' },
        { title: '可视化管控，零 API 知识', desc: '添加 / 删除 / 刷新一键操作，不用编辑配置文件。' },
        { title: '一键调用测试', desc: '参数、环境变量、超时页面直填，当场看结果。' },
        { title: '自愈看门狗', desc: '持续掉线自动重启网关，带防抖 / 冷却 / 上限防失控。' },
        { title: '配置备份 / 恢复', desc: '一键导出、单文件恢复，再也不怕改坏配置。' },
        { title: '本地优先，零依赖', desc: '只听 127.0.0.1，数据不出本机；无 package.json，Node 直跑。' },
      ],
      featureTitle: '让 MCP 网关，看得见、管得了、会自愈',
      featureDesc: '把 mcp-hub 网关收拢成一个统一端点 + 一个浏览器驾驶舱。',
      moreTitle: '零依赖 · 单文件',
      moreDesc: '一个 Node 文件（server.js）+ 一个 HTML 页（index.html），无 package.json、无需安装任何依赖；自动恢复引擎内置防抖与冷却。',
      cta: '前往 GitHub',
    },
    en: {
      category: 'MCP · Gateway Console',
      tagline: 'One MCP config, serving every AI client you run.',
      desc: 'A zero-dependency web cockpit & auto-recovery watchdog for the mcp-hub gateway. Add, refresh and test every MCP server in one place; clients connect to a single unified endpoint — visible, manageable, self-healing.',
      highlights: [
        { title: 'One config, every client', desc: 'All clients share one endpoint; add a server once and it’s live everywhere.' },
        { title: 'Visual management, zero API knowledge', desc: 'Add / remove / refresh with clicks — no config files to edit.' },
        { title: 'One-click call testing', desc: 'Fill arguments / env / timeout in-page and see results.' },
        { title: 'Self-healing watchdog', desc: 'Sustained outages auto-restart the gateway, with debounce / cooldown / caps.' },
        { title: 'Config backup & restore', desc: 'Export with one click, recover from a single file.' },
        { title: 'Local-first, zero deps', desc: 'Binds to 127.0.0.1 only; no package.json, just Node.' },
      ],
      featureTitle: 'Make your MCP gateway visible, manageable, self-healing.',
      featureDesc: 'Collapse the mcp-hub gateway into one unified endpoint + a browser cockpit.',
      moreTitle: 'Zero-dependency · single file',
      moreDesc: 'One Node file (`server.js`) + one HTML page (`index.html`) — no package.json, nothing to install; the auto-recovery engine has built-in debounce & cooldown.',
      cta: 'View on GitHub',
    },
  },
]

export function getProduct(slug: string) {
  return OTHER_PRODUCTS.find((p) => p.slug === slug)
}

export function getLocaleContent(p: ProductNews, locale: Locale) {
  return locale === 'en' ? p.en : p.sc
}
