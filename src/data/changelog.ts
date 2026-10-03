// 开发日志数据（v0.98 → v0.99 更新要点）
// 开发日志内容，随版本发布维护。
// 五语（sc / tc / en / ko / ja）分语范式同 quickstart.ts / manual.ts；九类各一节、每节每条一行，star = 重磅。
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
    version: 'v0.99.20260925',
    sections: [
      {
        title: '分析引擎 —— 同一段录音，三套引擎按场景切换',
        items: [
          { star: true, text: '三套 SOTA 音高引擎并存：pYIN（流式/实时）、SwiftF0（轻量离线）、RMVPE（复音·嘈杂人声）——按研究场景切换，纯 CPU ONNX 推理，不依赖 GPU。' },
          { star: true, text: '反量化连续音高：输出连续 Hz 而非离散网格，微分音与滑音等细微差别被忠实保留——这正是民族音乐学与音声学关心的对象。' },
          { text: '流式音高采用 20 cent 网格 HMM + Viterbi 平滑，兼顾实时性与稳定性。' },
          { text: '静音段误检门控、超量程次谐波抑制：录音里的“无声段”与“极低音”不再产出假音高。' },
          { text: '差异网格支持任意音律：不只十二平均律，可对接自建律制。' },
          { text: '可选 Rust 原生音高核（默认关闭）：为追求性能的环境提供加速路径。' },
        ],
      },
      {
        title: '界面与工作台 —— 三栏工作台，状态重启即回',
        items: [
          { star: true, text: '三栏工作台：左侧分析导航（7 大视图一键切换，已分析自动打勾）、中央画布堆叠、右侧检查器实时读数；栏宽、折叠态、上次视图重启后原样恢复。' },
          { star: true, text: '主工具栏「工作区开关组」：批处理 / 房间模态 / 房间声学 / 图表设计器统一为一组开关，互斥、再点收回常规工作区。' },
          { text: '侧滑抽屉全面退役，改常驻面板。' },
          { text: '帮助 ▸ 检查更新（只通知）：有新版本在状态栏提示并附更新说明链接；请求零标识（不带版本号/设备信息）、每日至多一次，可随时在「设置 → AI」关闭。' },
          { text: '应用内微信群二维码入口与「支持一下」致谢框，替代旧授权码机制。' },
          { text: '三栏分界线：悬停时在光标处浮现 ◁‖▷ 抓手，拖拽改宽、双击收放。' },
          { text: '面板头统一构件（标题 + 右操作区）与空态/分组规范落地，界面语言从“控件堆放”变为“仪器版面”。' },
          { text: '图标体系扩至 30 枚，并派生 macOS / Windows / Linux / 通用四套风格。' },
          { text: '参数控件规范：名称/控件/单位三段式、参数范围可见（不再裸数字框）、状态点与激活态统一。' },
          { text: '设置页快捷键标签随界面语言本地化，中英日韩不再中英混排。' },
        ],
      },
      {
        title: '图表与出图 —— 为论文配图与报告而生',
        items: [
          { star: true, text: '图表设计器：实时预览 + 内容外壳（标题/副标题/来源/脚注）+ 参考线与阈值线 + 主题预设与样式 JSON 导入导出。' },
          { star: true, text: '报告导出线：出版级 PDF / HTML 报告导出 + 可选 AI 解读段（AI 解读默认不外发，需本地引擎）。' },
          { star: true, text: '导出恒白底：预览与导出同一实现，所见即所得；3D 视图导出同样为白底而不是屏幕截图。' },
          { text: '出版级出图：SVG / PDF 矢量 + PNG 位图，300 DPI 可调。' },
          { text: '多轨对照分析、标注取点与钢琴键参考面。' },
          { text: '钢琴键面物理配色：白键/黑键按物理约定取色，不随明暗主题反转。' },
          { text: '数据墨色令牌化：73 处硬编码颜色清零，多序列色彩在全部主题下一致且可辨。' },
        ],
      },
      {
        title: 'AI 释图 —— 让频谱“能读、能写、能引用”',
        items: [
          { star: true, text: '气泡 Markdown 渲染：标题/列表/表格/代码块正确呈现，流式输出顺滑；LaTeX 等不支持语法降级保留不丢内容。' },
          { text: '对话窗口通用功能补齐：一键复制（写入原文而非富文本）、重新生成、清空会话、滚动跟随。' },
          { text: '输出面向学术写作：可识别谱峰/泛音序列/共振峰结构，给出可直接写进论文的分析段落草稿。' },
        ],
      },
      {
        title: '田野工作与元数据 —— 从采录到长期典藏',
        items: [
          { text: '田野元数据导出（JSON / XML / CSV），字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等着录要素；支持自定义映射。' },
          { text: '多轨工作流：轨身份色扩为 8 色内容色板（身份色与反馈色分家）；逐轨分析结果桥接任务中心。' },
          { text: '任务中心面板持久化：显隐与折叠态记忆。' },
          { text: '文件浏览器右键可直接「加入多轨」。' },
        ],
      },
      {
        title: '性能与稳定 —— 弱设备也能跑',
        items: [
          { text: 'DSP 向量化：FFT 加速 YIN 差分函数，约 5× 提速。' },
          { text: '内存峰值降低约 40%：30 分钟长录音峰值 < 140MB、端到端分析约 196 秒（≈ 9.2× 实时）。' },
          { text: '分析全面异步化：长录音不再阻塞界面。' },
          { text: '内存护栏压测接入，防止长时间运行下的资源累积。' },
        ],
      },
      {
        title: '主题与可读性',
        items: [
          { text: '9 套主题（明/暗同骨架 + 每套单一强调色），覆盖学术场景的长时间阅读。' },
          { star: true, text: '对比度全面达标：正文 ≥ 4.5:1、次级与禁用文字 ≥ 3:1，且覆盖四档背景 × 9 套主题全量实测。' },
          { text: '跨平台字体回落链（macOS / Windows / Linux），中文与乐理符号不乱码。' },
        ],
      },
      {
        title: '许可与开源 · 交付形态',
        items: [
          { star: true, text: '双包制：full（内置 AI 引擎与 FFmpeg，离线可跑）/ core（精简约 1/6 体积，AI 组件按需下载）。' },
          { star: true, text: '许可收紧为 GPL-3.0-only，与所依赖的 PyQt6 许可一致；随附第三方许可与来源清单。' },
          { text: '模型权重：full 包内置 rmvpe / swift_f0 两枚 ONNX，离线可跑；core 包首次使用时按需下载（含 sha256 校验）。' },
          { text: 'FFmpeg：full 包与 Windows core 包内置（MP3 / M4A / AAC 直接解码）；macOS / Linux core 包需系统自备 FFmpeg（播放不受影响）。' },
          { text: '移除试用与授权门控，功能不再分级。' },
        ],
      },
      {
        title: '工程质量 —— 面向“可复现”的承诺',
        items: [
          { text: '自动化测试 2965 项，逐文件隔离回归，保证每次改动可追溯。' },
          { text: '冻结守卫：图表结构 / 主题令牌 / 图标资产均有守卫，防止静默回归。' },
          { text: '发布链：许可头、第三方清单、模型来源与校验值齐备。' },
        ],
      },
    ],
  },
  tc: {
    title: '開發日誌',
    subtitle: 'v0.98 → v0.99 更新要點：九類更新、每條一行，★ 為本版重磅。',
    version: 'v0.99.20260925',
    sections: [
      {
        title: '分析引擎 —— 同一段錄音，三套引擎按場景切換',
        items: [
          { star: true, text: '三套 SOTA 音高引擎並存：pYIN（串流/即時）、SwiftF0（輕量離線）、RMVPE（複音·嘈雜人聲）——按研究場景切換，純 CPU ONNX 推理，不依賴 GPU。' },
          { star: true, text: '反量化連續音高：輸出連續 Hz 而非離散網格，微分音與滑音等細微差別被忠實保留——這正是民族音樂學與音聲學關心的對象。' },
          { text: '串流音高採用 20 cent 網格 HMM + Viterbi 平滑，兼顧即時性與穩定性。' },
          { text: '靜音段誤檢門控、超量程次諧波抑制：錄音裡的「無聲段」與「極低音」不再產出假音高。' },
          { text: '差異網格支援任意音律：不只十二平均律，可對接自建律制。' },
          { text: '可選 Rust 原生音高核（預設關閉）：為追求效能的環境提供加速路徑。' },
        ],
      },
      {
        title: '介面與工作台 —— 三欄工作台，狀態重啟即回',
        items: [
          { star: true, text: '三欄工作台：左側分析導航（7 大視圖一鍵切換，已分析自動打勾）、中央畫布堆疊、右側檢查器即時讀數；欄寬、折疊態、上次視圖重啟後原樣恢復。' },
          { star: true, text: '主工具列「工作區開關組」：批次處理 / 房間模態 / 房間聲學 / 圖表設計器統一為一組開關，互斥、再點收回常規工作區。' },
          { text: '側滑抽屜全面退役，改為常駐面板。' },
          { text: '說明 ▸ 檢查更新（僅通知）：有新版本時在狀態列提示並附更新說明連結；請求零識別（不帶版本號/裝置資訊）、每日至多一次，可隨時在「設定 → AI」關閉。' },
          { text: '應用內微信群二維碼入口與「支持一下」致謝框，取代舊授權碼機制。' },
          { text: '三欄分界線：懸停時在光標處浮現 ◁‖▷ 抓手，拖曳改寬、雙擊收放。' },
          { text: '面板頭統一構件（標題 + 右操作區）與空態/分組規範落地，介面語言從「控件堆放」變為「儀器版面」。' },
          { text: '圖示體系擴至 30 枚，並派生 macOS / Windows / Linux / 通用四套風格。' },
          { text: '參數控件規範：名稱/控件/單位三段式、參數範圍可見（不再裸數字框）、狀態點與激活態統一。' },
          { text: '設定頁快捷鍵標籤隨介面語言本地化，中英日韓不再中英混排。' },
        ],
      },
      {
        title: '圖表與出圖 —— 為論文配圖與報告而生',
        items: [
          { star: true, text: '圖表設計器：即時預覽 + 內容外殼（標題/副標題/來源/腳註）+ 參考線與閾值線 + 主題預設與樣式 JSON 匯入匯出。' },
          { star: true, text: '報告匯出線：出版級 PDF / HTML 報告匯出 + 可選 AI 解讀段（AI 解讀預設不外發，需本地引擎）。' },
          { star: true, text: '匯出恆白底：預覽與匯出同一實現，所見即所得；3D 視圖匯出同樣為白底而不是螢幕截圖。' },
          { text: '出版級出圖：SVG / PDF 向量 + PNG 點陣，300 DPI 可調。' },
          { text: '多軌對照分析、標註取點與鋼琴鍵參考面。' },
          { text: '鋼琴鍵面物理配色：白鍵/黑鍵按物理約定取色，不隨明暗主題反轉。' },
          { text: '資料墨色代幣化：73 處硬編碼顏色清零，多序列色彩在全部主題下一致且可辨。' },
        ],
      },
      {
        title: 'AI 釋圖 —— 讓頻譜「能讀、能寫、能引用」',
        items: [
          { star: true, text: '氣泡 Markdown 渲染：標題/列表/表格/程式碼區塊正確呈現，串流輸出順滑；LaTeX 等不支援語法降級保留不丟內容。' },
          { text: '對話視窗通用功能補齊：一鍵複製（寫入原文而非富文本）、重新產生、清空會話、捲動跟隨。' },
          { text: '輸出面向學術寫作：可識別譜峰/泛音序列/共振峰結構，給出可直接寫進論文的分析段落草稿。' },
        ],
      },
      {
        title: '田野工作與元資料 —— 從採錄到長期典藏',
        items: [
          { text: '田野元資料匯出（JSON / XML / CSV），字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等著錄要素；支援自訂映射。' },
          { text: '多軌工作流：軌身份色擴為 8 色內容色板（身份色與回饋色分家）；逐軌分析結果橋接任務中心。' },
          { text: '任務中心面板持久化：顯隱與折疊態記憶。' },
          { text: '檔案瀏覽器右鍵可直接「加入多軌」。' },
        ],
      },
      {
        title: '效能與穩定 —— 弱設備也能跑',
        items: [
          { text: 'DSP 向量化：FFT 加速 YIN 差分函數，約 5× 提速。' },
          { text: '記憶體峰值降低約 40%：30 分鐘長錄音峰值 < 140MB、端到端分析約 196 秒（≈ 9.2× 即時）。' },
          { text: '分析全面非同步化：長錄音不再阻塞介面。' },
          { text: '記憶體護欄壓測接入，防止長時間運行下的資源累積。' },
        ],
      },
      {
        title: '主題與可讀性',
        items: [
          { text: '9 套主題（明/暗同骨架 + 每套單一強調色），覆蓋學術場景的長時間閱讀。' },
          { star: true, text: '對比度全面達標：正文 ≥ 4.5:1、次級與停用文字 ≥ 3:1，且覆蓋四檔背景 × 9 套主題全量實測。' },
          { text: '跨平台字型回落鏈（macOS / Windows / Linux），中文與樂理符號不亂碼。' },
        ],
      },
      {
        title: '許可與開源 · 交付形態',
        items: [
          { star: true, text: '雙包制：full（內建 AI 引擎與 FFmpeg，離線可跑）/ core（精簡約 1/6 體積，AI 組件按需下載）。' },
          { star: true, text: '許可收緊為 GPL-3.0-only，與所依賴的 PyQt6 許可一致；隨附第三方許可與來源清單。' },
          { text: '模型權重：full 包內建 rmvpe / swift_f0 兩枚 ONNX，離線可跑；core 包首次使用時按需下載（含 sha256 校驗）。' },
          { text: 'FFmpeg：full 包與 Windows core 包內建（MP3 / M4A / AAC 直接解碼）；macOS / Linux core 包需系統自備 FFmpeg（播放不受影響）。' },
          { text: '移除試用與授權門控，功能不再分級。' },
        ],
      },
      {
        title: '工程品質 —— 面向「可重現」的承諾',
        items: [
          { text: '自動化測試 2965 項，逐檔案隔離回歸，保證每次改動可追溯。' },
          { text: '凍結守護：圖表結構 / 主題代幣 / 圖示資產均有守護，防止靜默回歸。' },
          { text: '發布鏈：許可頭、第三方清單、模型來源與校驗值齊備。' },
        ],
      },
    ],
  },
  en: {
    title: 'Changelog',
    subtitle: 'v0.98 → v0.99 highlights: nine categories, one line each — ★ marks this release’s headliners.',
    version: 'v0.99.20260925',
    sections: [
      {
        title: 'Analysis engines — one recording, three engines by scenario',
        items: [
          { star: true, text: 'Three state-of-the-art pitch engines side by side: pYIN (streaming/real-time), SwiftF0 (lightweight offline), RMVPE (polyphonic·noisy vocals) — switch by research scenario, pure-CPU ONNX inference, no GPU required.' },
          { star: true, text: 'De-quantized continuous pitch: outputs continuous Hz rather than a discrete grid, faithfully preserving subtle differences like microtones and glissandi — exactly what ethnomusicology and voice science care about.' },
          { text: 'Streaming pitch uses a 20-cent grid HMM + Viterbi smoothing, balancing real-time responsiveness and stability.' },
          { text: 'Silence-gate false-detection control and out-of-range subharmonic suppression: “silent sections” and “very low notes” in a recording no longer produce phantom pitches.' },
          { text: 'The difference grid supports arbitrary tunings: not just 12-TET, it can connect to your own tuning system.' },
          { text: 'Optional native-Rust pitch core (off by default): an accelerated path for performance-critical setups.' },
        ],
      },
      {
        title: 'Interface & workspace — a three-pane workbench, state restored on restart',
        items: [
          { star: true, text: 'Three-pane workspace: left analysis navigation (7 views one-click, auto-checked once analyzed), central stacked canvas, right inspector live readouts; pane widths, collapse states and last view restore exactly after restart.' },
          { star: true, text: 'Main-toolbar “workspace toggle group”: batch / room modes / room acoustics / chart designer unified into one mutually exclusive toggle group — click again to return to the regular workspace.' },
          { text: 'Side drawers fully retired in favor of persistent panels.' },
          { text: 'Help ▸ Check for updates (notify-only): a new version shows a status-bar hint with an update-notes link; requests are identity-free (no version/device info), at most once a day, and can be turned off anytime under “Settings → AI”.' },
          { text: 'In-app WeChat group QR entry and a “Support us” acknowledgment box, replacing the old license-code gate.' },
          { text: 'Three-pane dividers: on hover a ◁‖▷ grip appears at the cursor — drag to resize, double-click to collapse/expand.' },
          { text: 'Unified panel headers (title + right action area) and empty-state/grouping conventions land, shifting the UI language from “piling controls” to “instrument layout”.' },
          { text: 'Icon set expanded to 30, with macOS / Windows / Linux / generic style variants derived.' },
          { text: 'Parameter-control conventions: name/control/unit in three segments, ranges visible (no more bare number boxes), status dots and active states unified.' },
          { text: 'Shortcut labels in Settings now localize with the interface language, so English UI no longer shows mixed Chinese.' },
        ],
      },
      {
        title: 'Charts & export — built for paper figures and reports',
        items: [
          { star: true, text: 'Chart designer: live preview + content shell (title/subtitle/source/footnote) + reference and threshold lines + theme presets with style JSON import/export.' },
          { star: true, text: 'Report-export line: publication-grade PDF / HTML report export + an optional AI-interpretation section (AI output is not sent externally by default; requires a local engine).' },
          { star: true, text: 'Exports are always on a white background: preview and export share one implementation, WYSIWYG; 3D-view exports are likewise white-background, not screen captures.' },
          { text: 'Publication-grade figures: SVG / PDF vector + PNG bitmap, adjustable to 300 DPI.' },
          { text: 'Multi-track comparison, annotation point-picking and a piano-key reference surface.' },
          { text: 'Piano-key physical coloring: white/black keys follow physical convention and do not invert with light/dark themes.' },
          { text: 'Data-ink tokenization: 73 hardcoded colors cleared to zero, multi-series colors consistent and distinguishable across all themes.' },
        ],
      },
      {
        title: 'AI chart reading — make spectra readable, writable, citable',
        items: [
          { star: true, text: 'Bubble Markdown rendering: headings/lists/tables/code blocks display correctly with smooth streaming; unsupported syntax such as LaTeX degrades gracefully without dropping content.' },
          { text: 'Chat-window basics completed: one-click copy (writes plain text, not rich text), regenerate, clear session, scroll-follow.' },
          { text: 'Output aims at academic writing: it can recognize spectral peaks/harmonic series/formant structure and draft analysis paragraphs you can drop into a paper.' },
        ],
      },
      {
        title: 'Fieldwork & metadata — from capture to long-term archive',
        items: [
          { text: 'Field metadata export (JSON / XML / CSV), fields reference IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 and other cataloging elements; custom mapping supported.' },
          { text: 'Multi-track workflow: track identity colors expanded to an 8-color content palette (identity colors separated from feedback colors); per-track results bridge into the task center.' },
          { text: 'Task-center panel persistence: show/hide and collapse states remembered.' },
          { text: 'Right-click in the file browser to “add to multi-track” directly.' },
        ],
      },
      {
        title: 'Performance & stability — runs on weak devices',
        items: [
          { text: 'DSP vectorization: FFT-accelerated YIN difference function, about 5× faster.' },
          { text: 'Peak memory down ~40%: a 30-minute recording peaks < 140MB, end-to-end analysis ~196 seconds (≈ 9.2× real-time).' },
          { text: 'Analysis fully asynchronous: long recordings no longer block the interface.' },
          { text: 'Memory-guardrail stress testing wired in, preventing resource accumulation over long runs.' },
        ],
      },
      {
        title: 'Themes & readability',
        items: [
          { text: '9 themes (light/dark on one skeleton + a single accent color each), covering long reading in academic settings.' },
          { star: true, text: 'Contrast fully meets target: body text ≥ 4.5:1, secondary and disabled text ≥ 3:1, measured across four background levels × all 9 themes.' },
          { text: 'Cross-platform font fallback chain (macOS / Windows / Linux), Chinese and music-notation symbols never garble.' },
        ],
      },
      {
        title: 'Licensing & open source · delivery',
        items: [
          { star: true, text: 'Two-package model: full (bundles the AI engine and FFmpeg, runs offline) / core (about 1/6 the size, AI components downloaded on demand).' },
          { star: true, text: 'License tightened to GPL-3.0-only, consistent with the PyQt6 it depends on; ships a third-party license and attribution list.' },
          { text: 'Model weights: the full package bundles two ONNX models (rmvpe / swift_f0) for offline use; the core package downloads them on first use (with sha256 verification).' },
          { text: 'FFmpeg: bundled in the full package and the Windows core package (MP3 / M4A / AAC decode out of the box); macOS / Linux core packages need a system FFmpeg (playback is unaffected).' },
          { text: 'Trial and license gating removed — features are no longer tiered.' },
        ],
      },
      {
        title: 'Engineering quality — a commitment to reproducibility',
        items: [
          { text: '2965 automated tests, per-file isolated regression, ensuring every change is traceable.' },
          { text: 'Freeze guards: chart structure / theme tokens / icon assets all guarded against silent regressions.' },
          { text: 'Release chain: license headers, third-party list, model sources and checksums all in place.' },
        ],
      },
    ],
  },
  ko: {
    title: '개발 로그',
    subtitle: 'v0.98 → v0.99 주요 업데이트: 9개 카테고리, 항목당 한 줄 — ★는 이번 릴리스의 헤드라인 항목입니다.',
    version: 'v0.99.20260925',
    sections: [
      {
        title: '분석 엔진 —— 같은 녹음, 시나리오별 3개 엔진 전환',
        items: [
          { star: true, text: '세 개의 SOTA 피치 엔진이 나란히: pYIN(스트리밍/실시간), SwiftF0(경량 오프라인), RMVPE(복음·소음이 많은 보컬) —— 연구 시나리오에 따라 전환, 순수 CPU ONNX 추론, GPU 불필요.' },
          { star: true, text: '탈양자화 연속 피치: 이산 그리드가 아닌 연속 Hz를 출력하여 미세음과 글라이드 같은 미묘한 차이를 충실히 보존 —— 바로 민족음악학과 음향학이 주의하는 대상입니다.' },
          { text: '스트리밍 피치는 20 cent 그리드 HMM + Viterbi 평활화를 사용해 실시간성과 안정성을 동시에 확보합니다.' },
          { text: '무음 구간 오검출 게이팅, 초과 범위 하조파 억제: 녹음 속의 “무음 구간”과 “극저음”이 더 이상 가짜 피치를 생성하지 않습니다.' },
          { text: '차이 그리드는 임의의 음률을 지원합니다: 12등간음계뿐 아니라 자체 구축한 음률 체계에도 연결할 수 있습니다.' },
          { text: '선택적 Rust 네이티브 피치 코어(기본 꺼짐): 성능이 중요한 환경을 위한 가속 경로를 제공합니다.' },
        ],
      },
      {
        title: '인터페이스와 워크스페이스 —— 3패널 워크벤치, 재시작해도 상태 그대로',
        items: [
          { star: true, text: '3패널 워크스페이스: 왼쪽 분석 내비게이션(7개 뷰 원클릭 전환, 분석 완료 자동 체크), 중앙 캔버스 스택, 오른쪽 인스펙터 실시간 읽기값; 패널 너비, 접힘 상태, 마지막 뷰가 재시작 후 그대로 복원됩니다.' },
          { star: true, text: '메인 도구모음「워크스페이스 토글 그룹」: 배치 처리 / 룸 모드 / 룸 음향 / 차트 디자이너를 한 토글 그룹으로 통합 — 상호 배타적이며, 다시 클릭하면 일반 워크스페이스로 돌아갑니다.' },
          { text: '사이드 드로어를 전면 폐지하고 상시 패널로 전환했습니다.' },
          { text: '도움말 ▸ 업데이트 확인(알림만): 새 버전이 있으면 상태 표시줄에 알림과 업데이트 안내 링크를 표시합니다; 요청은 무식별(버전/기기 정보 없음), 하루 최대 한 번이며 「설정 → AI」에서 언제든 끌 수 있습니다.' },
          { text: '앱 내 위챗 그룹 QR 진입점과 「후원하기」 감사 박스로 기존 라이선스 코드 방식을 대체합니다.' },
          { text: '3패널 분할선: 호버 시 커서에 ◁‖▷ 그립이 나타납니다 — 드래그로 너비 변경, 더블클릭으로 접기/펼치기.' },
          { text: '패널 헤더 통일 구성 요소(제목 + 오른쪽 액션 영역)와 빈 상태/그룹화 규약이 적용되어, 인터페이스 언어가 “컨트롤 쌓기”에서 “기기 레이아웃”으로 바뀝니다.' },
          { text: '아이콘 체계가 30개로 확장되고 macOS / Windows / Linux / 일반 4종 스타일이 파생됩니다.' },
          { text: '파라미터 컨트롤 규약: 이름/컨트롤/단위 3분할, 파라미터 범위 표시(더 이상 맨 숫자 상자 없음), 상태 점과 활성 상태 통일.' },
          { text: '설정 페이지의 단축키 라벨이 인터페이스 언어에 맞춰 현지화되어, 중국어·영어·일본어·한국어가 더 이상 뒤섞이지 않습니다.' },
        ],
      },
      {
        title: '차트와 내보내기 —— 논문 도표와 보고서를 위해 태어남',
        items: [
          { star: true, text: '차트 디자이너: 실시간 미리보기 + 콘텐츠 셸(제목/부제목/출처/각주) + 기준선과 임계선 + 테마 프리셋과 스타일 JSON 가져오기/내보내기.' },
          { star: true, text: '보고서 내보내기 라인: 출판급 PDF / HTML 보고서 내보내기 + 선택적 AI 해석 섹션(AI 해석은 기본적으로 외부 전송하지 않으며 로컬 엔진이 필요).' },
          { star: true, text: '내보내기는 항상 흰 배경: 미리보기와 내보내기가 동일한 구현으로 보이는 그대로; 3D 뷰 내보내기 역시 스크린 캡처가 아닌 흰 배경입니다.' },
          { text: '출판급 도표: SVG / PDF 벡터 + PNG 비트맵, 300 DPI 조절 가능.' },
          { text: '멀티트랙 대조 분석, 주석 포인트 지정과 피아노 건반 참조면.' },
          { text: '피아노 건반면의 물리적 색상 지정: 흰건/검정건은 물리적 관례에 따라 색을 정하며, 밝은/어두운 테마에 따라 반전되지 않습니다.' },
          { text: '데이터 잉크 토큰화: 73개 하드코딩 색을 제로화하여, 다중 시계열 색상이 모든 테마에서 일관되고 구분 가능합니다.' },
        ],
      },
      {
        title: 'AI 해석 —— 스펙트럼을 “읽히고, 쓰이고, 인용되게”',
        items: [
          { star: true, text: '버블 Markdown 렌더링: 제목/목록/테이블/코드 블록이 올바르게 표시되고 스트리밍 출력이 매끄럽습니다; LaTeX 등 미지원 문법은 내용 손실 없이 단계적으로 보존됩니다.' },
          { text: '채팅 창 기본 기능 보강: 원클릭 복사(원문 기록, 리치 텍스트 아님), 다시 생성, 세션 지우기, 스크롤 팔로우.' },
          { text: '출력은 학술 작성을 지향: 스펙트럼 피크/하모닉 계열/포먼트 구조를 식별하고, 논문에 바로 쓸 수 있는 분석 문단 초안을 제공합니다.' },
        ],
      },
      {
        title: '필드워크와 메타데이터 —— 채록부터 장기 보존까지',
        items: [
          { text: '필드 메타데이터 내보내기(JSON / XML / CSV), 필드는 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 등 카탈로깅 요소를 참조; 사용자 정의 매핑 지원.' },
          { text: '멀티트랙 워크플로: 트랙 아이덴티티 색을 8색 콘텐츠 팔레트로 확장(아이덴티티 색과 피드백 색 분리); 트랙별 분석 결과를 작업 센터로 브리징.' },
          { text: '작업 센터 패널 영속화: 표시/숨김과 접힘 상태가 기억됩니다.' },
          { text: '파일 브라우저에서 우클릭으로 바로「멀티트랙에 추가」할 수 있습니다.' },
        ],
      },
      {
        title: '성능과 안정 —— 사양이 낮은 기기에서도 동작',
        items: [
          { text: 'DSP 벡터화: FFT 가속 YIN 차분 함수, 약 5× 속도 향상.' },
          { text: '메모리 피크 약 40% 감소: 30분 장시간 녹음의 피크 < 140MB, 끝에서 끝까지 분석 약 196초(≈ 9.2× 실시간).' },
          { text: '분석 전체 비동기화: 장시간 녹음이 더 이상 인터페이스를 막지 않습니다.' },
          { text: '메모리 가드레일 스트레스 테스트를 연결하여, 장시간 실행 시 자원 축적을 방지합니다.' },
        ],
      },
      {
        title: '테마와 가독성',
        items: [
          { text: '9종 테마(밝은/어두운 동일 스켈레톤 + 각 테마 단일 강조색), 학술 환경의 장시간 독서를 커버합니다.' },
          { star: true, text: '대비도가 전면 기준 달성: 본문 ≥ 4.5:1, 보조 및 비활성 텍스트 ≥ 3:1, 4단계 배경 × 9종 테마 전량 실측.' },
          { text: '크로스 플랫폼 폰트 폴백 체인(macOS / Windows / Linux), 중국어와 악보 기호가 깨지지 않습니다.' },
        ],
      },
      {
        title: '라이선스와 오픈소스 · 배포 형태',
        items: [
          { star: true, text: '듀얼 패키지 모델: full(AI 엔진과 FFmpeg 내장, 오프라인 실행) / core(약 1/6 크기로 간소화, AI 구성 요소는 필요 시 다운로드).' },
          { star: true, text: '라이선스를 GPL-3.0-only으로 강화하여, 의존하는 PyQt6 라이선스와 일치시킵니다; 제3자 라이선스와 출처 목록을 동봉.' },
          { text: '모델 가중치: full 패키지에 rmvpe / swift_f0 두 ONNX를 내장하여 오프라인 실행; core 패키지는 첫 사용 시 필요에 따라 다운로드(sha256 검증 포함).' },
          { text: 'FFmpeg: full 패키지와 Windows core 패키지에 내장(MP3 / M4A / AAC 직접 디코딩); macOS / Linux core 패키지는 시스템 FFmpeg가 필요합니다(재생에는 영향 없음).' },
          { text: '시범 사용과 라이선스 게이트를 제거하여, 기능이 더 이상 등급으로 나뉘지 않습니다.' },
        ],
      },
      {
        title: '엔지니어링 품질 —— “재현 가능”에 대한 약속',
        items: [
          { text: '자동화 테스트 2965개, 파일별 격리 회귀로 모든 변경이 추적 가능하도록 보장합니다.' },
          { text: '프리즈 가드: 차트 구조 / 테마 토큰 / 아이콘 자산 모두 가드가 있어 침묵 회귀를 방지합니다.' },
          { text: '릴리스 체인: 라이선스 헤더, 제3자 목록, 모델 출처와 체크섬이 모두 갖춰져 있습니다.' },
        ],
      },
    ],
  },
  ja: {
    title: '開発ログ',
    subtitle: 'v0.98 → v0.99 の主な更新：9カテゴリ、各1行 — ★は本リリースの見出し項目です。',
    version: 'v0.99.20260925',
    sections: [
      {
        title: '分析エンジン —— 同じ録音、3エンジンをシーン別に切替',
        items: [
          { star: true, text: '3つのSOTAピッチエンジンを並列搭載：pYIN（ストリーミング/リアルタイム）、SwiftF0（軽量オフライン）、RMVPE（複音・ノイズの多いボーカル）—— 研究シーンに応じて切替、純CPU ONNX推論、GPU不要。' },
          { star: true, text: 'デ量子化連続ピッチ：離散グリッドではなく連続 Hz を出力し、微分音やグリンドなどの細かな差を忠実に保持 —— まさに民族音楽学と音響学が関心を持つ対象です。' },
          { text: 'ストリーミングピッチは 20 cent グリッド HMM + Viterbi スムージングを採用し、リアルタイム性と安定性を両立。' },
          { text: '無音区間の誤検出ゲーティング、超範囲のサブハーモニック抑制：録音中の“無音区間”と“極低音”がもう幻のピッチを生みません。' },
          { text: '差分グリッドは任意の音律に対応：12平均律だけでなく、自作の律制にも接続可能。' },
          { text: 'オプションの Rust ネイティブピッチコア（既定でオフ）：性能重視の環境向けに加速パスを提供。' },
        ],
      },
      {
        title: 'インターフェースとワークスペース —— 3ペインのワークベンチ、状態は再起動後もそのまま',
        items: [
          { star: true, text: '3ペインワークスペース：左の分析ナビゲーション（7ビューをワンクリック切替、解析済みは自動チェック）、中央のキャンバススタック、右のインスペクターのライブ読み取り；ペイン幅・折りたたみ状態・最終ビューは再起動後もそのまま復元。' },
          { star: true, text: 'メインツールバーの「ワークスペース切替グループ」：バッチ処理 / ルームモード / ルーム音響 / チャートデザイナーを1つの切替グループに統合 —— 相互排他、もう一度クリックで通常ワークスペースに戻ります。' },
          { text: 'サイドドロワーは全面廃止し、常設パネルに移行。' },
          { text: 'ヘルプ ▸ 更新を確認（通知のみ）：新バージョンがあるとステータスバーに通知と更新案内リンクを表示；リクエストは無識別（バージョン/デバイス情報なし）、1日1回まで、いつでも「設定 → AI」でオフにできます。' },
          { text: 'アプリ内のWeChatグループQRコード入口と「支援する」感謝ボックスで、旧ライセンスコード方式を置き換え。' },
          { text: '3ペインの境界線：ホバーするとカーソル位置に ◁‖▷ グリップが表示 —— ドラッグで幅変更、ダブルクリックで折りたたみ/展開。' },
          { text: 'パネルヘッダーの統一コンポーネント（タイトル + 右アクション領域）と空状態/グループ化の規約を適用し、インターフェースの言語が「コントロールの積み重ね」から「計器レイアウト」へ。' },
          { text: 'アイコン体系を30個に拡張し、macOS / Windows / Linux / ジェネリックの4種スタイルを派生。' },
          { text: 'パラメータコントロールの規約：名前/コントロール/単位の3分割、パラメータ範囲の可視化（裸の数字ボックスは廃止）、状態ドットとアクティブ状態の統一。' },
          { text: '設定ページのショートカットラベルがインターフェース言語に合わせてローカライズされ、中英日韓が混在しなくなります。' },
        ],
      },
      {
        title: 'チャートとエクスポート —— 論文の図とレポートのために',
        items: [
          { star: true, text: 'チャートデザイナー：ライブプレビュー + コンテンツシェル（タイトル/サブタイトル/出典/脚注）+ 基準線と閾値線 + テーマプリセットとスタイル JSON のインポート/エクスポート。' },
          { star: true, text: 'レポートエクスポートライン：出版グレードの PDF / HTML レポート出力 + オプションの AI 解釈セクション（AI 解釈は既定で外部送信せず、ローカルエンジンが必要）。' },
          { star: true, text: 'エクスポートは常に白背景：プレビューとエクスポートが同一実装で見たまま；3D ビューのエクスポートもスクリーンキャプチャではなく白背景。' },
          { text: '出版グレードの図：SVG / PDF ベクター + PNG ビットマップ、300 DPI 調整可能。' },
          { text: 'マルチトラック対照分析、注釈ポイント指定とピアノ鍵盤の参照面。' },
          { text: 'ピアノ鍵盤面の物理配色：白鍵/黒鍵は物理的慣例に従って取色し、ライト/ダークテーマで反転しない。' },
          { text: 'データインクのトークン化：73箇所のハードコード色をゼロにし、複数シリーズの色は全テーマで一貫かつ識別可能。' },
        ],
      },
      {
        title: 'AI 解釈 —— スペクトルを「読めて、書けて、引用できる」に',
        items: [
          { star: true, text: 'バブル Markdown レンダリング：見出し/リスト/テーブル/コードブロックを正しく表示し、ストリーミング出力は滑らか；LaTeX などの未対応構文は段階的にフォールバックし、内容は失われない。' },
          { text: 'チャットウィンドウの基本機能の補完：ワンクリックコピー（原文を記録、リッチテキストではない）、再生成、セッションクリア、スクロールフォロー。' },
          { text: '出力は学術ライティング志向：スペクトルピーク/ハーモニック系列/フォーマント構造を識別し、論文にそのまま書ける分析段落の草稿を提供。' },
        ],
      },
      {
        title: 'フィールドワークとメタデータ —— 採録から長期アーカイブまで',
        items: [
          { text: 'フィールドメタデータエクスポート（JSON / XML / CSV）、フィールドは IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等のカタログ要素を参照；カスタムマッピング対応。' },
          { text: 'マルチトラックワークフロー：トラックアイデンティティカラーを8色のコンテンツパレットに拡張（アイデンティティ色とフィードバック色を分離）；トラックごとの分析結果をタスクセンターへブリッジ。' },
          { text: 'タスクセンターパネルの永続化：表示/非表示と折りたたみ状態を記憶。' },
          { text: 'ファイルブラウザで右クリックして直接「マルチトラックに追加」。' },
        ],
      },
      {
        title: 'パフォーマンスと安定性 —— 低スペックのデバイスでも動作',
        items: [
          { text: 'DSP のベクトル化：FFT 加速の YIN 差分関数、約 5× 高速化。' },
          { text: 'メモリピークを約 40% 削減：30分間の録音でピーク < 140MB、エンドツーエンドの分析は約 196 秒（≈ 9.2× リアルタイム）。' },
          { text: '分析の全面非同期化：長い録音が UI をブロックしなくなります。' },
          { text: 'メモリガードレールのストレステストを接続し、長時間実行時のリソース蓄積を防止。' },
        ],
      },
      {
        title: 'テーマと可読性',
        items: [
          { text: '9種のテーマ（ライト/ダークは同一スケルトン + 各テーマ1つのアクセントカラー）、学術環境での長時間の読みをカバー。' },
          { star: true, text: 'コントラストは全面基準達成：本文 ≥ 4.5:1、セカンダリおよび無効テキスト ≥ 3:1、4段階の背景 × 9種のテーマを全量実測。' },
          { text: 'クロスプラットフォームのフォントフォールバックチェーン（macOS / Windows / Linux）、中国語と楽譜記号が文字化けしない。' },
        ],
      },
      {
        title: 'ライセンスとオープンソース · 配布形態',
        items: [
          { star: true, text: 'デュアルパッケージ制：full（AI エンジンと FFmpeg を内蔵、オフライン動作）/ core（約 1/6 のサイズに簡素化、AI コンポーネントは必要時にダウンロード）。' },
          { star: true, text: 'ライセンスを GPL-3.0-only に引き締め、依存する PyQt6 のライセンスと一致；サードパーティライセンスと出所リストを同梱。' },
          { text: 'モデルの重み：full パッケージに rmvpe / swift_f0 の2つの ONNX を内蔵しオフライン動作；core パッケージは初回使用時に必要に応じてダウンロード（sha256 検証付き）。' },
          { text: 'FFmpeg：full パッケージと Windows core パッケージに内蔵（MP3 / M4A / AAC を直接デコード）；macOS / Linux core パッケージはシステムの FFmpeg が必要（再生には影響なし）。' },
          { text: 'トライアルとライセンスのゲーティングを撤去し、機能はもう段階分けされません。' },
        ],
      },
      {
        title: 'エンジニアリング品質 —— 「再現可能」への約束',
        items: [
          { text: '自動化テスト 2965 件、ファイル単位の隔離リグレッションで、すべての変更が追跡可能であることを保証。' },
          { text: 'フリーズガード：チャート構造 / テーマトークン / アイコンアセットすべてにガードを設け、サイレントリグレッションを防止。' },
          { text: 'リリースチェーン：ライセンスヘッダー、サードパーティリスト、モデルの出所とチェックサムがすべて整っている。' },
        ],
      },
    ],
  },
}

export function getChangelog(locale: Locale): ChangelogContent {
  return CHANGELOG[locale]
}