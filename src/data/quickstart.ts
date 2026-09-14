// 快速入门数据（站点「帮助」栏目 · S3-c2）
// 内容源：acouscope/src/acouscope/ui/widgets/help_dialogs.py 的 QUICK_START（T-1057 ce4fe7d 已入库）
// 三语（sc / tc / en）各 14 条，逐字镜像内容源 <li>（顺序、措辞、加粗要点一致）；分语范式同 changelog.ts。
// {sc_*} 占位符不逐条写死、不原样渲染花括号：统一由下方 SC_KEYS 映射表在页面渲染时替换（共 11 键，整值逐字照抄）。
import type { CoreLocale, Locale } from '../i18n'

// 快捷键占位符 → 默认键位（唯一映射表；页面渲染时统一替换 {sc_*}）
export const SC_KEYS: Record<string, string> = {
  sc_open: 'Ctrl+O',
  sc_export: 'Ctrl+E',
  sc_settings: 'Ctrl+,',
  sc_undo: 'Ctrl+Z',
  sc_redo: 'Ctrl+Y',
  sc_cut: 'Ctrl+X',
  sc_copy: 'Ctrl+C',
  sc_paste: 'Ctrl+V',
  sc_silence: 'Ctrl+L',
  sc_trim: 'Ctrl+T',
  sc_sel_all: 'Ctrl+A',
}

// 统一替换 {sc_*} → SC_KEYS 值；未知占位符原样保留（防御）
export function renderShortcuts(text: string): string {
  return text.replace(/\{sc_[a-z_]+\}/g, (m) => SC_KEYS[m.slice(1, -1)] ?? m)
}

export interface QuickstartItem {
  text: string // 含 {sc_*} 占位符的原文（渲染时经 renderShortcuts 替换）
}

export interface QuickstartContent {
  items: QuickstartItem[] // 14 条，逐字镜像 QUICK_START[lang]
  footnote: string // 内容源 <ol> 之后的收尾句（含 <b>，渲染时同样替换占位符）
}

export const QUICK_START: Record<CoreLocale, QuickstartContent> = {
  sc: {
    items: [
      { text: '<b>启动与首启</b>：首次使用音高检测的在线引擎（SwiftF0 / RMVPE）时，应用会自动下载模型（含校验）并内置；此后可<b>离线</b>使用。' },
      { text: '<b>打开音频</b>：文件 → 打开（{sc_open}），支持 WAV / FLAC / MP3 / AIFF / OGG，内置解码，无需外部编码器。' },
      { text: '<b>三栏认识</b>：左栏导航与页签（文件 / 设置） · 中央画布（上波形、下分析） · 右栏检查器（含 AI 释图）。' },
      { text: '<b>播放与播放头</b>：空格播放 / 暂停，点击波形任意位置定位播放头。' },
      { text: '<b>选择区段</b>：波形上左键拖动建立选区；Delete 删除，{sc_undo} 撤销。' },
      { text: '<b>切换分析视图</b>：F2 频谱 · F3 语谱 · F4 音高 · F5 共振峰 · F6 音色 · F7 3D · F8 房间模态。' },
      { text: '<b>三套音高引擎</b>：pYIN（流式 / 实时） · SwiftF0（轻量离线） · RMVPE（复音、嘈杂人声），在音高面板选择。' },
      { text: '<b>图表设计器</b>：文件 → 导出 → 图表设计器（或分析工具栏），实时预览、白底导出，适合论文配图。' },
      { text: '<b>AI 释图</b>：右栏 → AI 释图（Ctrl+I），读取谱峰 / 泛音 / 共振峰，输出 Markdown 段落草稿。' },
      { text: '<b>白底导出</b>：图形导出（SVG / PDF / PNG）恒为白底、所见即所得（{sc_export}）。' },
      { text: '<b>工作区开关组</b>：工具栏右侧「批处理」等全铺页开关互斥、再点收回；左栏打开文件 / 设置。' },
      { text: '<b>偏好设置</b>：设置 → 偏好设置（{sc_settings}），切换语言（简 / 繁 / EN）、9 套主题、图标风格。' },
      { text: '<b>快捷键三连</b>：空格 = 播放 / 暂停；Delete = 删除选区；Shift + 拖拽 = 联动分析指针。' },
      { text: '<b>去哪看更多</b>：帮助 → 用户手册，含 19 节完整说明。' },
    ],
    footnote: '完整说明请查看 <b>帮助 → 用户手册</b>。',
  },
  tc: {
    items: [
      { text: '<b>啟動與首啟</b>：首次使用音高偵測的線上引擎（SwiftF0 / RMVPE）時，應用會自動下載模型（含校驗）並內建；此後可<b>離線</b>使用。' },
      { text: '<b>開啟音訊</b>：檔案 → 開啟（{sc_open}），支援 WAV / FLAC / MP3 / AIFF / OGG，內建解碼，無需外部編碼器。' },
      { text: '<b>三欄認識</b>：左欄導覽與頁籤（檔案 / 設定） · 中央畫布（上波形、下分析） · 右欄檢查器（含 AI 釋圖）。' },
      { text: '<b>播放與播放頭</b>：空白鍵播放 / 暫停，點擊波形任意位置定位播放頭。' },
      { text: '<b>選擇區段</b>：波形上左鍵拖動建立選區；Delete 刪除，{sc_undo} 復原。' },
      { text: '<b>切換分析視圖</b>：F2 頻譜 · F3 語譜 · F4 音高 · F5 共振峰 · F6 音色 · F7 3D · F8 房間模態。' },
      { text: '<b>三套音高引擎</b>：pYIN（串流 / 即時） · SwiftF0（輕量離線） · RMVPE（複音、嘈雜人聲），在音高面板選擇。' },
      { text: '<b>圖表設計器</b>：檔案 → 匯出 → 圖表設計器（或分析工具列），即時預覽、白底匯出，適合論文配圖。' },
      { text: '<b>AI 釋圖</b>：右欄 → AI 釋圖（Ctrl+I），讀取譜峰 / 泛音 / 共振峰，輸出 Markdown 段落草稿。' },
      { text: '<b>白底匯出</b>：圖形匯出（SVG / PDF / PNG）恆為白底、所見即所得（{sc_export}）。' },
      { text: '<b>工作區開關組</b>：工具列右側「批次」等全鋪頁開關互斥、再點收回；左欄開啟檔案 / 設定。' },
      { text: '<b>偏好設定</b>：設定 → 偏好設定（{sc_settings}），切換語言（簡 / 繁 / EN）、9 套主題、圖示風格。' },
      { text: '<b>快速鍵三連</b>：空白鍵 = 播放 / 暫停；Delete = 刪除選區；Shift + 拖曳 = 聯動分析指標。' },
      { text: '<b>去哪看更多</b>：說明 → 使用者手冊，含 19 節完整說明。' },
    ],
    footnote: '完整說明請參閱 <b>說明 → 使用者手冊</b>。',
  },
  en: {
    items: [
      { text: '<b>Startup</b>: the first time you use an online pitch engine (SwiftF0 / RMVPE), the model is downloaded and verified automatically and bundled in; afterwards it works <b>offline</b>.' },
      { text: '<b>Open audio</b>: File → Open ({sc_open}). Supports WAV / FLAC / MP3 / AIFF / OGG with built-in decoding — no system encoder needed.' },
      { text: '<b>Three panes</b>: left navigation and tabs (Files / Settings) · center canvas (waveform on top, analysis below) · right inspector (including AI Interpretation).' },
      { text: '<b>Play and playhead</b>: Space toggles play / pause; click anywhere on the waveform to position the playhead.' },
      { text: '<b>Select a region</b>: drag with the left button on the waveform; Delete removes it, {sc_undo} undoes.' },
      { text: '<b>Switch analysis views</b>: F2 Spectrum · F3 Spectrogram · F4 Pitch · F5 Formants · F6 Timbre · F7 3D · F8 Room Modes.' },
      { text: '<b>Three pitch engines</b>: pYIN (streaming / real-time) · SwiftF0 (lightweight offline) · RMVPE (polyphonic, noisy vocals), chosen in the Pitch panel.' },
      { text: '<b>Chart Designer</b>: File → Export → Chart Designer (or the Analysis toolbar); live preview, white-background export, ideal for figures.' },
      { text: '<b>AI Interpretation</b>: right inspector → AI Interpretation (Ctrl+I); reads spectral peaks / harmonics / formants and drafts Markdown paragraphs.' },
      { text: '<b>White-background export</b>: chart export (SVG / PDF / PNG) is always on a white background, WYSIWYG ({sc_export}).' },
      { text: '<b>Workspace switch group</b>: the full-pane toggles on the toolbar (e.g. Batch) are mutually exclusive; clicking again collapses back to the regular workspace.' },
      { text: '<b>Preferences</b>: Settings → Preferences ({sc_settings}) to switch language (简体 / 繁體 / English), 9 themes and icon style.' },
      { text: '<b>Three key habits</b>: Space = play / pause; Delete = delete selection; Shift + drag = linked analysis pointer.' },
      { text: '<b>Learn more</b>: Help → User Manual, a full 19-section guide.' },
    ],
    footnote: 'See <b>Help → User Manual</b> for the full documentation.',
  },}

export function getQuickstart(locale: Locale): QuickstartContent {
  const k: CoreLocale = locale === 'ko' || locale === 'ja' ? 'en' : locale
  return QUICK_START[k]
}
