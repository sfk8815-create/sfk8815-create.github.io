// 快速入门数据（站点「帮助」栏目 · S3-c2）
// 内容源：acouscope/src/acouscope/ui/widgets/help_dialogs.py 的 QUICK_START（T-1057 ce4fe7d 已入库）
// 五语（sc / tc / en / ko / ja）各 14 条，逐字镜像内容源 <li>（顺序、措辞、加粗要点一致）；分语范式同 changelog.ts。
// {sc_*} 占位符不逐条写死、不原样渲染花括号：统一由下方 SC_KEYS 映射表在页面渲染时替换（共 11 键，整值逐字照抄）。
import type { Locale } from '../i18n'

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

export const QUICK_START: Record<Locale, QuickstartContent> = {
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
  },
  ko: {
    items: [
      { text: '<b>시작 및 최초 실행</b>: 온라인 피치 엔진（SwiftF0 / RMVPE）을 처음 사용할 때, 모델이 자동으로 다운로드（검증 포함）되어 내장되며, 이후에는 <b>오프라인</b>으로 사용할 수 있습니다.' },
      { text: '<b>오디오 열기</b>: 파일 → 열기（{sc_open}）, WAV / FLAC / MP3 / AIFF / OGG 지원, 내장 디코딩으로 외부 인코더 불필요.' },
      { text: '<b>3패널 구조</b>: 왼쪽 내비게이션과 탭（파일 / 설정） · 중앙 캔버스（위쪽 웨이브폼, 아래쪽 분석） · 오른쪽 인스펙터（AI 해석 포함）.' },
      { text: '<b>재생 및 플레이헤드</b>: 스페이스바로 재생 / 일시정지, 웨이브폼의 아무 위치나 클릭하면 플레이헤드를 지정합니다.' },
      { text: '<b>구간 선택</b>: 웨이브폼에서 마우스 왼쪽 버튼으로 드래그해 선택 영역을 만듭니다; Delete 키로 삭제, {sc_undo}로 실행 취소.' },
      { text: '<b>분석 뷰 전환</b>: F2 스펙트럼 · F3 스펙트로그램 · F4 피치 · F5 포먼트 · F6 음색 · F7 3D · F8 룸 모드.' },
      { text: '<b>3종 피치 엔진</b>: pYIN（스트리밍 / 실시간） · SwiftF0（경량 오프라인） · RMVPE（복음, 노이즈 많은 보컬）, 피치 패널에서 선택합니다.' },
      { text: '<b>차트 디자이너</b>: 파일 → 내보내기 → 차트 디자이너（또는 분석 도구모음）; 실시간 미리보기, 흰 배경 내보내기, 논문 도표에 적합.' },
      { text: '<b>AI 해석</b>: 오른쪽 인스펙터 → AI 해석（Ctrl+I）; 스펙트럼 피크 / 하모닉 / 포먼트를 읽고 Markdown 문단 초안을 생성합니다.' },
      { text: '<b>흰 배경 내보내기</b>: 차트 내보내기（SVG / PDF / PNG）는 항상 흰 배경, 보이는 그대로（{sc_export}）.' },
      { text: '<b>워크스페이스 토글 그룹</b>: 도구모음 오른쪽의「배치」등 전체 패널 토글은 상호 배타적이며, 다시 클릭하면 일반 워크스페이스로 접힙니다; 왼쪽 패널에서 파일 / 설정을 엽니다.' },
      { text: '<b>환경 설정</b>: 설정 → 환경 설정（{sc_settings}）, 언어 전환（간체 / 번체 / EN）, 9종 테마, 아이콘 스타일.' },
      { text: '<b>단축키 3연속</b>: 스페이스바 = 재생 / 일시정지; Delete = 선택 영역 삭제; Shift + 드래그 = 연동 분석 포인터.' },
      { text: '<b>더 보기</b>: 도움말 → 사용자 매뉴얼, 19개 섹션의 완전한 설명을 포함합니다.' },
    ],
    footnote: '완전한 설명은 <b>도움말 → 사용자 매뉴얼</b>을 참고하세요.',
  },
  ja: {
    items: [
      { text: '<b>起動と初回実行</b>: オンラインのピッチエンジン（SwiftF0 / RMVPE）を初めて使うと、モデルが自動的にダウンロード（検証込み）されて内蔵され、以降は<b>オフライン</b>で利用できます。' },
      { text: '<b>オーディオを開く</b>: ファイル → 開く（{sc_open}）、WAV / FLAC / MP3 / AIFF / OGG に対応、内蔵デコードで外部エンコーダー不要。' },
      { text: '<b>3ペインの構造</b>: 左のナビゲーションとタブ（ファイル / 設定） · 中央キャンバス（上：波形、下：分析） · 右のインスペクター（AI 解釈を含む）。' },
      { text: '<b>再生とプレイヘッド</b>: スペースキーで再生 / 一時停止、波形の任意の位置をクリックしてプレイヘッドを配置。' },
      { text: '<b>領域の選択</b>: 波形上で左ボタンをドラッグして選択範囲を作成; Delete で削除、{sc_undo} で元に戻す。' },
      { text: '<b>分析ビューの切り替え</b>: F2 スペクトル · F3 スペクトログラム · F4 ピッチ · F5 フォーマント · F6 ティンバー · F7 3D · F8 ルームモード。' },
      { text: '<b>3種のピッチエンジン</b>: pYIN（ストリーミング / リアルタイム） · SwiftF0（軽量オフライン） · RMVPE（ポリフォニック、ノイズの多いボーカル）、ピッチパネルで選択。' },
      { text: '<b>チャートデザイナー</b>: ファイル → エクスポート → チャートデザイナー（または分析ツールバー）、ライブプレビュー、白背景エクスポート、論文の図に最適。' },
      { text: '<b>AI 解釈</b>: 右インスペクター → AI 解釈（Ctrl+I）、スペクトルピーク / ハーモニック / フォーマントを読み取り、Markdown 段落の草稿を作成。' },
      { text: '<b>白背景エクスポート</b>: グラフのエクスポート（SVG / PDF / PNG）は常に白背景、WYSIWYG（{sc_export}）。' },
      { text: '<b>ワークスペース切替グループ</b>: ツールバー右側の「バッチ」などの全画面切替は排他制御で、再度クリックすると通常のワークスペースに折りたたみ; 左ペインでファイル / 設定を開く。' },
      { text: '<b>環境設定</b>: 設定 → 環境設定（{sc_settings}）、言語の切り替え（簡体 / 繁体 / EN）、9 種のテーマ、アイコンスタイル。' },
      { text: '<b>ショートカットキー 3連</b>: スペース = 再生 / 一時停止; Delete = 選択範囲の削除; Shift + ドラッグ = 連動分析ポインタ。' },
      { text: '<b>もっと詳しく</b>: ヘルプ → ユーザーマニュアル、19 章の完全な説明を含む。' },
    ],
    footnote: '完全な説明は <b>ヘルプ → ユーザーマニュアル</b>を参照してください。',
  },}

export function getQuickstart(locale: Locale): QuickstartContent {
  return QUICK_START[locale]
}
