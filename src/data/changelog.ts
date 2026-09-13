// 开发日志数据（v0.98 → v0.99 更新要点）
// 内容源：.pi/knowledge/SITE_CHANGELOG_0.99.md（幕僚编制，指挥拍板）
// 三语（sc / tc / en）分语范式同 products.ts；九类各一节、每节每条一行，star = 重磅。
import type { Locale } from '../i18n'

export interface ChangelogItem {
  text: string
  star?: boolean // ★ 重磅（用户应最先看到）
}

export interface ChangelogSection {
  title: string
  items: ChangelogItem[]
}

export interface ChangelogContent {
  title: string
  subtitle: string
  version: string
  sections: ChangelogSection[]
}

export const CHANGELOG: Record<Locale, ChangelogContent> = {
  sc: {
    title: '开发日志',
    subtitle: 'v0.98 → v0.99 更新要点：九类更新、每条一行，★ 为本版重磅。',
    version: 'v0.99.20260904',
    sections: [
      {
        title: '分析引擎 —— 同一段录音，三套引擎按场景切换',
        items: [
          { star: true, text: '三套 SOTA 音高引擎并存：pYIN（流式/实时）、SwiftF0（轻量离线）、RMVPE（复音·嘈杂人声）——按研究场景切换，纯 CPU ONNX 推理，不依赖 GPU。' },
          { star: true, text: '反量化连续音高：输出连续 Hz 而非离散网格，微分音与滑音等细微差别被忠实保留——这正是民族音乐学与音声学关心的对象。' },
          { text: '流式音高采用 20 cent 网格 HMM + Viterbi 平滑，兼顾实时性与稳定性。' },
          { text: '静音段误检门控、超量程次谐波抑制：录音里的“无声段”与“极低音”不再产出假音高。' },
          { text: '差异网格支持任意音律（T-1034）：不只十二平均律，可对接自建律制。' },
        ],
      },
      {
        title: '界面与工作台 —— 三栏工作台，状态重启即回',
        items: [
          { star: true, text: '三栏工作台：左侧分析导航（7 大视图一键切换，已分析自动打勾）、中央画布堆叠、右侧检查器实时读数；栏宽、折叠态、上次视图重启后原样恢复。' },
          { star: true, text: '主工具栏「工作区开关组」：批处理 / 房间模态 / 房间声学 / 图表设计器统一为一组开关，互斥、再点收回常规工作区（T-1054 批0）。' },
          { text: '三栏分界线：悬停时在光标处浮现 ◁‖▷ 抓手，拖拽改宽、双击收放（T-1056）。' },
          { text: '面板头统一构件（标题 + 右操作区）与空态/分组规范落地，界面语言从“控件堆放”变为“仪器版面”（T-1033 / T-1048）。' },
          { text: '图标体系扩至 30 枚，并派生 macOS / Windows / Mint / 通用四套风格（T-1025）。' },
          { text: '参数控件规范：名称/控件/单位三段式、参数范围可见（不再裸数字框）、状态点与激活态统一（T-1047）。' },
        ],
      },
      {
        title: '图表与出图 —— 为论文配图而生',
        items: [
          { star: true, text: '图表设计器：实时预览 + 内容外壳（标题/副标题/来源/脚注）+ 参考线与阈值线 + 主题预设与样式 JSON 导入导出（T-1044 / T-1045 / T-1046）。' },
          { star: true, text: '导出恒白底：预览与导出同一实现，所见即所得；3D 视图导出同样为白底而不是屏幕截图（T-1052）。' },
          { text: '出版级出图：SVG / PDF 矢量 + PNG 位图，300 DPI 可调。' },
          { text: '钢琴键面物理配色：白键/黑键按物理约定取色，不随明暗主题反转（T-1042）。' },
          { text: '数据墨色令牌化：73 处硬编码颜色清零，多序列色彩在全部主题下一致且可辨（T-1038）。' },
        ],
      },
      {
        title: 'AI 释图 —— 让频谱“能读、能写、能引用”',
        items: [
          { star: true, text: '气泡 Markdown 渲染：标题/列表/表格/代码块正确呈现，流式输出顺滑；LaTeX 等不支持语法降级保留不丢内容（T-1055）。' },
          { text: '对话窗口通用功能补齐：一键复制（写入原文而非富文本）、重新生成、清空会话、滚动跟随。' },
          { text: '输出面向学术写作：可识别谱峰/泛音序列/共振峰结构，给出可直接写进论文的分析段落草稿。' },
        ],
      },
      {
        title: '田野工作与元数据 —— 从采录到长期典藏',
        items: [
          { text: '田野元数据导出（JSON / XML / CSV），字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等着录要素（字段对照核对中）；支持自定义映射。' },
          { text: '多轨工作流：轨身份色扩为 8 色内容色板（身份色与反馈色分家）；逐轨分析结果桥接任务中心（T-1036 / T-1041）。' },
          { text: '任务中心面板持久化：显隐与折叠态记忆（T-1040）。' },
          { text: '文件浏览器右键可直接「加入多轨」（T-1026）。' },
        ],
      },
      {
        title: '性能与稳定 —— 弱设备也能跑',
        items: [
          { text: 'DSP 向量化：FFT 加速 YIN 差分函数，约 5× 提速。' },
          { text: '内存峰值降低约 40%：30 分钟长录音峰值 < 140MB、端到端分析约 196 秒（≈ 9.2× 实时）。' },
          { text: '分析全面异步化：长录音不再阻塞界面。' },
          { text: '内存护栏压测接入，防止长时间运行下的资源累积（T-1039）。' },
        ],
      },
      {
        title: '主题与可读性',
        items: [
          { text: '9 套主题（明/暗同骨架 + 每套单一强调色），覆盖学术场景的长时间阅读。' },
          { star: true, text: '对比度全面达标：正文 ≥ 4.5:1、次级与禁用文字 ≥ 3:1，且覆盖四档背景 × 9 套主题全量实测（T-1053）。' },
          { text: '跨平台字体回落链（macOS / Windows / Linux），中文与乐理符号不乱码（T-1037）。' },
        ],
      },
      {
        title: '许可与开源',
        items: [
          { star: true, text: '许可收紧为 GPL-3.0-only，与所依赖的 PyQt6 许可一致；随附第三方许可与来源清单（T-1049）。' },
          { text: '模型权重不再随安装包分发：首次使用时自动下载（含 sha256 校验），此后可离线（T-1051）。' },
          { text: '打包内置 FFmpeg：MP3 / M4A / AAC 直接解码，零 Python 环境依赖，双击即用。' },
          { text: '移除试用与授权门控，功能不再分级（T-1016）。' },
        ],
      },
      {
        title: '工程质量 —— 面向“可复现”的承诺',
        items: [
          { text: '自动化测试 2148 项，逐文件隔离回归，保证每次改动可追溯。' },
          { text: '冻结守卫：图表结构 / 主题令牌 / 图标资产均有守卫，防止静默回归。' },
          { text: '发布链：许可头、第三方清单、模型来源与校验值齐备（T-1049 / T-1051）。' },
        ],
      },
    ],
  },
  tc: {
    title: '開發日誌',
    subtitle: 'v0.98 → v0.99 更新要點：九類更新、每條一行，★ 為本版重磅。',
    version: 'v0.99.20260904',
    sections: [
      {
        title: '分析引擎 —— 同一段錄音，三套引擎按場景切換',
        items: [
          { star: true, text: '三套 SOTA 音高引擎並存：pYIN（串流/即時）、SwiftF0（輕量離線）、RMVPE（複音·嘈雜人聲）——按研究場景切換，純 CPU ONNX 推理，不依賴 GPU。' },
          { star: true, text: '反量化連續音高：輸出連續 Hz 而非離散網格，微分音與滑音等細微差別被忠實保留——這正是民族音樂學與音聲學關心的對象。' },
          { text: '串流音高採用 20 cent 網格 HMM + Viterbi 平滑，兼顧即時性與穩定性。' },
          { text: '靜音段誤檢門控、超量程次諧波抑制：錄音裡的「無聲段」與「極低音」不再產出假音高。' },
          { text: '差異網格支援任意音律（T-1034）：不只十二平均律，可對接自建律制。' },
        ],
      },
      {
        title: '介面與工作台 —— 三欄工作台，狀態重啟即回',
        items: [
          { star: true, text: '三欄工作台：左側分析導航（7 大視圖一鍵切換，已分析自動打勾）、中央畫布堆疊、右側檢查器即時讀數；欄寬、折疊態、上次視圖重啟後原樣恢復。' },
          { star: true, text: '主工具列「工作區開關組」：批次處理 / 房間模態 / 房間聲學 / 圖表設計器統一為一組開關，互斥、再點收回常規工作區（T-1054 批0）。' },
          { text: '三欄分界線：懸停時在光標處浮現 ◁‖▷ 抓手，拖曳改寬、雙擊收放（T-1056）。' },
          { text: '面板頭統一構件（標題 + 右操作區）與空態/分組規範落地，介面語言從「控件堆放」變為「儀器版面」（T-1033 / T-1048）。' },
          { text: '圖示體系擴至 30 枚，並派生 macOS / Windows / Mint / 通用四套風格（T-1025）。' },
          { text: '參數控件規範：名稱/控件/單位三段式、參數範圍可見（不再裸數字框）、狀態點與激活態統一（T-1047）。' },
        ],
      },
      {
        title: '圖表與出圖 —— 為論文配圖而生',
        items: [
          { star: true, text: '圖表設計器：即時預覽 + 內容外殼（標題/副標題/來源/腳註）+ 參考線與閾值線 + 主題預設與樣式 JSON 匯入匯出（T-1044 / T-1045 / T-1046）。' },
          { star: true, text: '匯出恆白底：預覽與匯出同一實現，所見即所得；3D 視圖匯出同樣為白底而不是螢幕截圖（T-1052）。' },
          { text: '出版級出圖：SVG / PDF 向量 + PNG 點陣，300 DPI 可調。' },
          { text: '鋼琴鍵面物理配色：白鍵/黑鍵按物理約定取色，不隨明暗主題反轉（T-1042）。' },
          { text: '資料墨色代幣化：73 處硬編碼顏色清零，多序列色彩在全部主題下一致且可辨（T-1038）。' },
        ],
      },
      {
        title: 'AI 釋圖 —— 讓頻譜「能讀、能寫、能引用」',
        items: [
          { star: true, text: '氣泡 Markdown 渲染：標題/列表/表格/程式碼區塊正確呈現，串流輸出順滑；LaTeX 等不支援語法降級保留不丟內容（T-1055）。' },
          { text: '對話視窗通用功能補齊：一鍵複製（寫入原文而非富文本）、重新產生、清空會話、捲動跟隨。' },
          { text: '輸出面向學術寫作：可識別譜峰/泛音序列/共振峰結構，給出可直接寫進論文的分析段落草稿。' },
        ],
      },
      {
        title: '田野工作與元資料 —— 從採錄到長期典藏',
        items: [
          { text: '田野元資料匯出（JSON / XML / CSV），字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等著錄要素（字段對照核對中）；支援自訂映射。' },
          { text: '多軌工作流：軌身份色擴為 8 色內容色板（身份色與回饋色分家）；逐軌分析結果橋接任務中心（T-1036 / T-1041）。' },
          { text: '任務中心面板持久化：顯隱與折疊態記憶（T-1040）。' },
          { text: '檔案瀏覽器右鍵可直接「加入多軌」（T-1026）。' },
        ],
      },
      {
        title: '效能與穩定 —— 弱設備也能跑',
        items: [
          { text: 'DSP 向量化：FFT 加速 YIN 差分函數，約 5× 提速。' },
          { text: '記憶體峰值降低約 40%：30 分鐘長錄音峰值 < 140MB、端到端分析約 196 秒（≈ 9.2× 即時）。' },
          { text: '分析全面非同步化：長錄音不再阻塞介面。' },
          { text: '記憶體護欄壓測接入，防止長時間運行下的資源累積（T-1039）。' },
        ],
      },
      {
        title: '主題與可讀性',
        items: [
          { text: '9 套主題（明/暗同骨架 + 每套單一強調色），覆蓋學術場景的長時間閱讀。' },
          { star: true, text: '對比度全面達標：正文 ≥ 4.5:1、次級與停用文字 ≥ 3:1，且覆蓋四檔背景 × 9 套主題全量實測（T-1053）。' },
          { text: '跨平台字型回落鏈（macOS / Windows / Linux），中文與樂理符號不亂碼（T-1037）。' },
        ],
      },
      {
        title: '許可與開源',
        items: [
          { star: true, text: '許可收緊為 GPL-3.0-only，與所依賴的 PyQt6 許可一致；隨附第三方許可與來源清單（T-1049）。' },
          { text: '模型權重不再隨安裝包分發：首次使用時自動下載（含 sha256 校驗），此後可離線（T-1051）。' },
          { text: '打包內建 FFmpeg：MP3 / M4A / AAC 直接解碼，零 Python 環境依賴，雙擊即用。' },
          { text: '移除試用與授權門控，功能不再分級（T-1016）。' },
        ],
      },
      {
        title: '工程品質 —— 面向「可重現」的承諾',
        items: [
          { text: '自動化測試 2148 項，逐檔案隔離回歸，保證每次改動可追溯。' },
          { text: '凍結守護：圖表結構 / 主題代幣 / 圖示資產均有守護，防止靜默回歸。' },
          { text: '發布鏈：許可頭、第三方清單、模型來源與校驗值齊備（T-1049 / T-1051）。' },
        ],
      },
    ],
  },
  en: {
    title: 'Changelog',
    subtitle: 'What changed from v0.98 to v0.99: nine categories, one line each — ★ marks the headline items of this release.',
    version: 'v0.99.20260904',
    sections: [
      {
        title: 'Analysis engines — one recording, three engines by scenario',
        items: [
          { star: true, text: 'Three SOTA pitch engines side by side: pYIN (streaming/realtime), SwiftF0 (lightweight offline), RMVPE (polyphonic · noisy vocals) — switch by research scenario, pure-CPU ONNX inference, no GPU required.' },
          { star: true, text: 'De-quantized continuous pitch: outputs continuous Hz instead of a discrete grid, faithfully preserving microtones and glides — exactly what ethnomusicology and acoustics care about.' },
          { text: 'Streaming pitch uses a 20-cent grid HMM + Viterbi smoothing, balancing realtime performance and stability.' },
          { text: 'Silence false-detection gating and out-of-range subharmonic suppression: “silent” and “ultra-low” passages no longer produce phantom pitches.' },
          { text: 'The difference grid supports arbitrary tunings (T-1034): not just 12-TET, connect your own scale.' },
        ],
      },
      {
        title: 'Interface & workspace — three-pane workbench, state restored on restart',
        items: [
          { star: true, text: 'Three-pane workspace: left analysis nav (7 views, one-click switch, analyzed auto-checked), central stacked canvas, right inspector with live readings; pane widths, collapse states and last view restore exactly after restart.' },
          { star: true, text: 'Main toolbar “workspace switch group”: batch / room modes / room acoustics / chart designer unified into one switch set — mutually exclusive, click again to return to the regular workspace (T-1054 batch 0).' },
          { text: 'Pane dividers: hover to reveal a ◁‖▷ grip at the cursor — drag to resize, double-click to collapse/expand (T-1056).' },
          { text: 'Unified panel-header component (title + right action area) and empty-state / grouping conventions landed; the interface language shifts from “stacked controls” to “instrument layout” (T-1033 / T-1048).' },
          { text: 'Icon system expanded to 30, with four style derivatives: macOS / Windows / Mint / generic (T-1025).' },
          { text: 'Parameter control spec: name / control / unit in three parts, visible parameter ranges (no more bare number boxes), unified status dots and active states (T-1047).' },
        ],
      },
      {
        title: 'Charts & export — born for paper figures',
        items: [
          { star: true, text: 'Chart designer: live preview + content shell (title / subtitle / source / footnote) + reference & threshold lines + theme presets and style JSON import/export (T-1044 / T-1045 / T-1046).' },
          { star: true, text: 'Export is always white-background: preview and export share one implementation — WYSIWYG; 3D views export as white background, not a screen capture (T-1052).' },
          { text: 'Publication-grade output: SVG / PDF vector + PNG bitmap, 300 DPI adjustable.' },
          { text: 'Physically correct piano-key colors: white/black keys follow physical convention and never invert with light/dark themes (T-1042).' },
          { text: 'Data ink tokenized: 73 hardcoded colors eliminated; multi-series colors stay consistent and distinguishable across all themes (T-1038).' },
        ],
      },
      {
        title: 'AI interpretation — make spectra readable, writable, citable',
        items: [
          { star: true, text: 'Bubble Markdown rendering: headings / lists / tables / code blocks render correctly with smooth streaming; unsupported syntax such as LaTeX degrades gracefully without losing content (T-1055).' },
          { text: 'Chat window basics completed: one-click copy (raw text, not rich text), regenerate, clear session, scroll follow.' },
          { text: 'Output oriented to academic writing: recognizes spectral peaks / harmonic series / formant structures and drafts analysis paragraphs you can drop straight into a paper.' },
        ],
      },
      {
        title: 'Fieldwork & metadata — from capture to long-term archiving',
        items: [
          { text: 'Field metadata export (JSON / XML / CSV), fields referencing cataloging elements of IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 (field-by-field mapping under review); custom mapping supported.' },
          { text: 'Multi-track workflow: track identity colors expanded to an 8-color content palette (identity and feedback colors separated); per-track analysis results bridge into the task center (T-1036 / T-1041).' },
          { text: 'Task-center panel persistence: visibility and collapse state are remembered (T-1040).' },
          { text: 'Right-click in the file browser to “add to multi-track” directly (T-1026).' },
        ],
      },
      {
        title: 'Performance & stability — runs on weak devices',
        items: [
          { text: 'Vectorized DSP: FFT-accelerated YIN difference function, ~5× faster.' },
          { text: 'Peak memory reduced by ~40%: a 30-minute recording peaks at < 140 MB, end-to-end analysis in ~196 s (≈ 9.2× realtime).' },
          { text: 'Fully asynchronous analysis: long recordings no longer block the UI.' },
          { text: 'Memory-guardrail stress tests integrated, preventing resource accumulation over long runs (T-1039).' },
        ],
      },
      {
        title: 'Themes & readability',
        items: [
          { text: 'Nine themes (light/dark share one skeleton + a single accent color each), covering long reading sessions in academic settings.' },
          { star: true, text: 'Contrast fully up to standard: body ≥ 4.5:1, secondary & disabled text ≥ 3:1, measured across all four background levels × nine themes (T-1053).' },
          { text: 'Cross-platform font fallback chains (macOS / Windows / Linux); Chinese and music-notation symbols never garble (T-1037).' },
        ],
      },
      {
        title: 'Licensing & open source',
        items: [
          { star: true, text: 'License tightened to GPL-3.0-only, aligned with the PyQt6 license it depends on; third-party licenses and a source list included (T-1049).' },
          { text: 'Model weights no longer ship with the installer: auto-downloaded on first use (sha256-verified), offline afterwards (T-1051).' },
          { text: 'FFmpeg bundled in the package: MP3 / M4A / AAC decode directly, zero Python-environment dependency, double-click to use.' },
          { text: 'Trial and licensing gates removed; features are no longer tiered (T-1016).' },
        ],
      },
      {
        title: 'Engineering quality — a promise toward reproducibility',
        items: [
          { text: '2148 automated tests with per-file isolated regression, so every change stays traceable.' },
          { text: 'Freeze guards: chart structure / theme tokens / icon assets are all guarded against silent regressions.' },
          { text: 'Release chain: license headers, third-party list, model provenance and checksums all in place (T-1049 / T-1051).' },
        ],
      },
    ],
  },
}

export function getChangelog(locale: Locale): ChangelogContent {
  return CHANGELOG[locale]
}
