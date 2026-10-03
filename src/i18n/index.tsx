import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type CoreLocale = 'sc' | 'tc' | 'en'
export type Locale = CoreLocale | 'ko' | 'ja'

export const LOCALES: { code: Locale; label: string; lang: string }[] = [
  { code: 'sc', label: '简体中文', lang: 'zh-CN' },
  { code: 'tc', label: '繁體中文', lang: 'zh-TW' },
  { code: 'en', label: 'English', lang: 'en' },
  { code: 'ko', label: '한국어', lang: 'ko' },
  { code: 'ja', label: '日本語', lang: 'ja' },
]

const dict = {
  sc: {
    meta: {
      title: 'AcouScope · 音析 —— 测度其所鸣，留证其所存 | 缙云声智',
      desc: '面向音乐学、声学与数字人文等研究领域的次世代声学分析引擎：三套 SOTA 音高引擎、三栏工作台、本地 AI 学术释图、田野元数据导出——弱设备也能流畅运行。',
    },
    brand: { name: '缙云声智', en: 'Jinyun SonicAI' },
    nav: { product: '产品', features: '特性', vision: '愿景', download: '下载', changelog: '开发日志', help: '帮助' },
    hero: {
      badge: '声音研究 · 可存档、可溯源 · 参考国际与中国档案元数据要素',
      slogan: '测度其所鸣，留证其所存。',
      subtitle:
        'AcouScope（音析）是面向音乐学、声学与数字人文等研究领域的次世代声学分析引擎。无论你是研究古琴泛音的民族音乐学家、分析唱腔音高的声乐研究者，还是测量琴房混响的音频工程师，它都能把听觉上的直觉，转译成可量化、可引用、可复现的声学证据。导出字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元数据要素（字段对照核对中），支持自定义映射，让每一段录音都可长期存档、可溯源。三栏工作台让频谱、语谱与 3D 视图随开随用，研究整理一气呵成。',
      cta1: '下载',
      cta2: '了解三套音高引擎',
      version: 'v0.99.20260925',
      chip: 'SOTA 深度学习底座 · 单窗口三栏工作台 · 本地 AI 释图',
    },
    product: {
      label: '面向音乐与数字人文领域',
      title: '认识 AcouScope · 音析',
      body: 'AcouScope 是面向音乐学、声学与数字人文等领域研究的专业声学分析软件，以严谨的学术态度，将声音的测量、分析与档案化融为一体——从课堂演示、田野采录，到论文配图与长期音档保存，皆能胜任。软件内置三套 SOTA 音高检测引擎（pYIN / SwiftF0 / RMVPE），可按研究场景灵活切换，仅凭 CPU 即可高效推理；其反量化连续音高技术，能够忠实还原微分音与滑音等细微差别；AI 释图与田野元数据导出，字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元数据要素（字段对照核对中），支持自定义映射，使分析图表清晰可信，让每段录音皆有据可查、可长期典藏。软件另提供 9 套主题与双语界面（简体中文 / 繁體中文 / English），兼顾学术研究的严谨与日常使用的舒适。',
      spectrum: '单窗口三栏工作台 · 三套音高引擎',
      quick: [
        { n: '3×', l: '音高引擎' },
        { n: '9.2×', l: '倍实时' },
        { n: '<140MB', l: '峰值内存' },
        { n: '196s', l: '每 30 分钟' },
      ],
    },
    pitch: {
      eyebrow: 'PITCH · 音高引擎',
      title: '三套 SOTA 音高检测引擎',
      subtitle: '按研究场景自由切换，纯 CPU 推理，从流式预览到田野弱设备皆能轻松胜任。',
      common: '纯 CPU ONNX 推理 · 30 分钟长录音约 196 秒分析 · 峰值内存 < 140MB',
      engines: [
        { name: 'pYIN', role: '经典算法 · 概率化 YIN', acc: '20 cent 分辨率', use: '流式预览、实时分析' },
        { name: 'SwiftF0', role: '深度神经模型 · 单音音高', acc: '90.2% HM 精度 · 9.2× 高倍实时', use: '9.5 万参轻量模型，弱设备首选' },
        { name: 'RMVPE', role: '深度神经模型 · 复音人声', acc: '复音 / 嘈杂环境稳健', use: '复音音乐中稳健的人声基频估计' },
      ],
    },
    features: {
      eyebrow: 'ACOUSTIC · 核心引擎',
      title: '用科学，还原声音里被忽略的细节。',
      desc: '从 SOTA 音高引擎到专业级三栏工作台，每一个细节都为田野研究与学术写作而设计——不只为"看见"，更为"可引用、可复现"。',
      items: [
        {
          title: '三套 SOTA 音高引擎',
          desc: 'pYIN（流式/实时，20 cent 分辨率）、SwiftF0（9.5 万参，9.2× 实时，90.2% HM 精度）、RMVPE（复音·嘈杂人声提取）按场景自由切换，纯 CPU ONNX 推理。',
          tag: 'pYIN · SwiftF0 · RMVPE',
        },
        {
          title: '单窗口三栏工作台',
          desc: '0.99 全新界面：左侧分析导航 7 大视图一键切换（已分析自动打勾）、中央画布堆叠、右侧检查器实时读数。三栏宽度、折叠、上次视图——重启即恢复工作现场。',
          tag: 'Workspace',
        },
        {
          title: 'core / full 双包',
          desc: 'full 内置 AI 引擎与 FFmpeg、离线开箱即用；core 精简约 1/6 体积、AI 组件按需下载。同一功能，按网络与存储自选。',
          tag: 'Two Packages',
        },
        {
          title: '反量化连续音高',
          desc: '抛物线插值 + 期望值法输出连续 Hz，忠实记录微分音与滑音等细微差别。',
          tag: 'Microtone',
        },
        {
          title: '本地 AI 学术释图',
          desc: '右侧一点"AI 释图"，连同采样率、基频、音分等数值上下文送入端侧模型，流式生成学术释读，可连续追问——隐私不出机器，无网也能用。',
          tag: 'AI Insight',
        },
        {
          title: '参考国内外元数据要素的导出',
          desc: '导出字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元数据要素（字段对照核对中），支持自定义映射；一键导出田野报告（JSON / XML / CSV）：档案编号、项目名称、传承人、采集时间、地区、类别、技术信息——让每段声音都有据可查、可长期存档、可溯源，直接提交期刊与档案馆。',
          tag: '元数据要素 · 自定义映射',
        },
        {
          title: '极限弱设备适配',
          desc: '免于 Python 运行环境配置：full 包内置 AI 引擎与 FFmpeg、装好即离线；core 包精简约 1/6、模型首次使用按需下载（含校验）后可离线。配合向量化 DSP 与流式处理——田野无网、设备老旧，也能顺畅分析 30 分钟长录音。',
          tag: '离线可用',
        },
      ],
    },
    screenshots: {
      eyebrow: 'INTERFACE · 界面一览',
      title: '一屏三栏，看尽声音的肌理。',
      subtitle: '从频谱、语谱到 3D 瀑布，随开随用、恒常不丢状态——像操作专业 DAW 一样整理你的声音素材。',
      zoom: '放大查看',
      close: '关闭',
      prev: '上一张',
      next: '下一张',
      panes: [
        { label: '分析导航', desc: '7 大视图一键切换，已分析自动打勾' },
        { label: '中央画布堆叠', desc: '频谱 / 语谱 / 3D 同屏常驻，切走再回原样都在' },
        { label: '检查器 · AI', desc: '当前视图 / 选区 / 分析窗 / 播放位置 / 音频参数实时读数' },
      ],
      shots: [
        { alt: 'FFT 频谱与曲谱标注界面（三栏工作台）', label: 'FFT · 频谱与曲谱' },
        { alt: '实时特征四窗口界面', label: '实时特征 · 四窗口监测' },
        { alt: '3D 频谱图界面', label: '3D 频谱图 · 瀑布式' },
      ],
    },
    charts: {
      eyebrow: 'DATA · 数据与洞察',
      title: '把事实，画成可信的证据。',
      desc: '以下数据面向研究场景，全部可核、可复现——从九大分析模块到跨平台，从测试规模到旗舰卖点。',
      c1t: '九大分析模块，四大能力族',
      c1s: '一条发丝线 = 一个分析模块 · 气泡大小 = 该模块数 · 时域 / 频域·频谱 / 音高·嗓音 / 空间·实时',
      c2t: '三大操作系统，一套完整能力',
      c2s: 'macOS · Windows · Linux · 全部实心 = 支持',
      c3t: '2965 项自动化测试，让结果可复现',
      c3s: 'algorithm · audio I/O · UI · 每项分析都经过验证',
      c4t: '两大旗舰，为一个研究者的论文而设',
      c4s: '出版级出图 + AI 释图 · 直投 CSSCI / SCI · gold = 旗舰/出版级',
      c5t: '一个可信赖的研究工具',
      c5s: '全核心算法自主研发 · 开源可审计 · GPL-3.0-only · 经得起同行评审推敲',
      fam_label: '气泡大小 = 分析模块数　·　金 = 分析最多的能力族',
      fam: ['时域', '频域·频谱', '音高·嗓音', '空间·实时'],
      engines: ['波形分析', 'FFT 频谱', '语谱图', '3D 频谱图', '音高分析', '共振峰分析', '音色分析', '实时特征', '房间模态分析'],
      cap: ['波形', 'FFT', '语谱', '音高·共振峰', '3D 频谱', '实时'],
      omarchy: '率先支持 Omarchy',
      mods: ['波形', 'FFT', '语谱', '音高', '共振峰', '音色', '3D', '实时', 'AI'],
      testsLabel: '项自动化测试 · pytest',
      trust: [
        { n: '9', label: '大分析模块', tag: 'Analysis Modules' },
        { n: '9', label: '套学术主题', tag: 'Themes' },
        { n: '5', label: '种界面语言', tag: '简体 / 繁體 / EN / 한국어 / 日本語' },
        { n: '2965', label: '项自动化测试', tag: 'Automated Tests' },
        { n: '5', label: '类安装形态', tag: 'Platforms' },
      ],
      flag: [
        { badge: '旗舰 01', title: '出版级出图', hook: '论文里能直接用的图，答辩不用再修。', points: ['导出与所见完全一致，SVG / PDF 矢量 + PNG 位图任选', '内置出版级字体与配色，中文与乐理符号不乱不糊', '自定义分辨率与图尺寸，直投 CSSCI / SCI', '一张图配一份说明，图表编号与注释由它来管'], stats: [{ n: '6', l: '导出格式' }, { n: '300', l: 'DPI 可调' }] },
        { badge: '旗舰 02', title: 'AI 释图', hook: '它以学术审稿人的视角，帮你读频谱。', points: ['自动识别谱峰、泛音序列与共振峰结构，中文学术语境解释', '给出可直接写进论文的分析段落草稿，省一半文字工时', '双语切换输出，国际会议投稿不用自己翻', '可提示的研究建议，下一步看哪里它会提醒'], stats: [{ n: '多', l: 'Provider 可选' }, { n: '30', l: 'AI 测试项' }] },
      ],
      rowPrec: '精度',
      rowUse: '适用场景',
      stdArchive: '参考的元数据要素',
      stdArchiveNote: '字段对照核对中（不作符合性声明）',
      pitchEng: '音高引擎',
    },
    vision: {
      eyebrow: '为声音立传 · 工作室愿景',
      title: '关于缙云声智',
      quote: '“我们相信，声音里藏着一个民族的审美、一个时代的记忆；而好的工具，让这些证据被看见、被引用、被传承。”',
      bodyTop:
        '缙云声智（Jinyun SonicAI）是西南大学音乐声学实验室面向创新应用落地的品牌之一，专注于音乐声学、音乐科技、数字人文与 AI 应用的交叉研究。',
      bodyBottom:
        'AcouScope（音析）是工作室为音乐与声音研究倾力打造的分析引擎——让研究、教学与创作，都能凭一套软件完成从田野采风到论文出版的全流程。',
      badges: ['西南大学', '音乐声学 · 数字人文', '开源可审计 · GPL-3.0-only'],
    },
    stats: {
      engines: '套音高引擎',
      tests: '项自动化测试',
      realtime: '倍实时',
      themes: '套学术主题',
    },
    download: {
      eyebrow: 'DOWNLOAD',
      title: '下载 AcouScope',
      subtitle: 'macOS（Apple Silicon / Intel）、Windows x64、Linux x86_64 构建包已全部就绪，选择你的系统即可下载。',
      heroBtn: '下载',
      recommend: '为您推荐',
      allTitle: '全部平台与版本',
      coming: '即将发布',
      note: 'GPL-3.0-only · 开源可审计 · 按需赞助',
      releaseHint: '下载后可对照 Release 页的 sha256 校验包体完整性。',
      faqHint: '首次打开被拦？见帮助页「遇到问题怎么办」。',
    },
    faq: {
      title: '遇到问题怎么办',
      items: [
        '首次打开被系统拦截（macOS）：提示"无法打开"或"无法验证开发者"时，在应用图标上右键（或按住 Control 点击）▸ 打开，弹窗里再点一次"打开"。只需这一次，之后双击即可正常打开。Windows 如遇 SmartScreen 蓝色提示，点"更多信息"▸"仍要运行"。',
        '若右键打开仍不行：本机终端里运行一条命令，仅移除 AcouScope 自身的"隔离"标记：xattr -d com.apple.quarantine "/Applications/AcouScope.app"。背景：本版有意未做 Apple 付费 notarization（公证），系统会把所有网上下载、未经公证的 App 默认标为"未验证"；这条命令只针对本应用自身放行，不更改任何系统安全设置，也不影响其他应用。',
        '想确认下载件完整未被篡改：发布页会给出每个安装包文件的 sha256 校验值。下载后在本机核对：macOS 终端运行 shasum -a 256 加文件名；Windows PowerShell 运行 Get-FileHash 文件名。两串完全一致再安装。',
        'mp3 / m4a 打不开、或 AI 解读不可用：多半是装了 core 轻量包——它不内置 FFmpeg 与本地 AI 引擎（播放音频通常不受影响，受影响的是这类格式的分析解码）。请改用 full 完整包，或自行安装 FFmpeg；AI 解读组件也可在设置里按需下载。',
        '下载慢、下载失败或遇到其他问题：换个网络重试；仍解决不了请发邮件到 sfklc@hotmail.com，或加官方微信群（应用内工具栏"加入官方微信群"有二维码）。反馈时请附上：你在做哪一步、期望看到什么、实际看到什么，最好带一张截图——这一句话对我们值一整天。',
      ],
    },
    cta: {
      title: '让每一段声音，都成为可引用的证据。',
      subtitle: '面向音乐学、声学与数字人文研究，从测量到档案化一气呵成。',
      button: '查看下载方式',
    },
    footer: {
      tagline: '测度其所鸣，留证其所存。',
      contact: '联系方式',
      license: '许可',
      rights: '© 2026 缙云声智（Jinyun SonicAI）\n西南大学艺术人类学研究所 · 西南大学中国音乐心理健康研究所',
      special: '谨以此软件，特别鸣谢并献予音乐声学领军学者、国务院特殊津贴专家：韩宝强 教授。',
      version: 'v0.99.20260925',
      licenseValue: '开源可审计 · GPL-3.0-only',
    },
    changelog: {
      eyebrow: 'CHANGELOG · 开发日志',
      headline: 'v0.98 → v0.99，九类更新',
      legend: '★ 为本版重磅（应最先看到）；每条一行，数字与站点口径一致。',
    },
    help: {
      eyebrow: 'HELP · 帮助',
      headline: '快速入门：十四步上手',
      legend: '内容镜像自 AcouScope 应用内「帮助 → 快速入门」（三语各 14 条，逐字一致）。',
      shortcutsTitle: '快捷键说明',
      shortcutsNote: 'macOS 上 Ctrl 对应 Cmd；其中「重做」在 macOS 为 Cmd+Shift+Z。',
    },
  },
  tc: {
    meta: {
      title: 'AcouScope · 音析 —— 測度其所鳴，留證其所存 | 縉雲聲智',
      desc: '面向音樂學、聲學與數位人文等研究領域的次世代聲學分析引擎：三套 SOTA 音高引擎、三欄工作台、本地 AI 學術釋圖、田野元資料匯出——弱設備也能流暢運行。',
    },
    brand: { name: '縉雲聲智', en: 'Jinyun SonicAI' },
    nav: { product: '產品', features: '特性', vision: '願景', download: '下載', changelog: '開發日誌', help: '幫助' },
    hero: {
      badge: '聲音研究 · 可儲存、可溯源 · 參考國際與中國檔案元資料要素',
      slogan: '測度其所鳴，留證其所存。',
      subtitle:
        'AcouScope（音析）是面向音樂學、聲學與數位人文等研究領域的次世代聲學分析引擎。無論你是研究古琴泛音的民樂學者、分析唱腔音高的聲樂研究者，還是測量琴房混響的音訊工程師，它都能把聽覺上的直覺，轉譯成可量化、可引用、可重現的聲學證據。匯出字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元資料要素（字段對照核對中），支援自訂映射，讓每一段錄音都可長期儲存、可溯源。三欄工作台讓頻譜、語譜與 3D 視圖隨開隨用，研究整理一氣呵成。',
      cta1: '下載',
      cta2: '了解三套音高引擎',
      version: 'v0.99.20260925',
      chip: 'SOTA 深度學習底座 · 單視窗三欄工作台 · 本地 AI 釋圖',
    },
    product: {
      label: '面向音樂與數位人文領域',
      title: '認識 AcouScope · 音析',
      body: 'AcouScope 是面向音樂學、聲學與數位人文等領域研究的專業聲學分析軟體，以嚴謹的學術態度，將聲音的測量、分析與檔案化融為一體——從課堂示範、田野採錄，到論文配圖與長期音檔保存，皆能勝任。軟體內建三套 SOTA 音高檢測引擎（pYIN / SwiftF0 / RMVPE），可按研究場景靈活切換，僅憑 CPU 即可高效推理；其反量化連續音高技術，能夠忠實還原微分音與滑音等細微差別；AI 釋圖與田野元資料匯出，字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元資料要素（字段對照核對中），支援自訂映射，使分析圖表清晰可信，讓每段錄音皆有據可查、可長期典藏。軟體另提供 9 套主題與雙語介面（簡體中文 / 繁體中文 / English），兼顧學術研究的嚴謹與日常使用的舒適。',
      spectrum: '單視窗三欄工作台 · 三套音高引擎',
      quick: [
        { n: '3×', l: '音高引擎' },
        { n: '9.2×', l: '倍實時' },
        { n: '<140MB', l: '峰值記憶體' },
        { n: '196s', l: '每 30 分鐘' },
      ],
    },
    pitch: {
      eyebrow: 'PITCH · 音高引擎',
      title: '三套 SOTA 音高檢測引擎',
      subtitle: '按研究場景自由切換，純 CPU 推理，從串流預覽到田野弱設備皆能輕鬆勝任。',
      common: '純 CPU ONNX 推理 · 30 分鐘長錄音約 196 秒分析 · 峰值記憶體 < 140MB',
      engines: [
        { name: 'pYIN', role: '經典演算法 · 機率化 YIN', acc: '20 cent 解析度', use: '串流預覽、即時分析' },
        { name: 'SwiftF0', role: '深度神經模型 · 單音音高', acc: '90.2% HM 精度 · 9.2× 高倍即時', use: '9.5 萬參輕量模型，弱設備首選' },
        { name: 'RMVPE', role: '深度神經模型 · 複音人聲', acc: '複音 / 嘈雜環境穩健', use: '複音音樂中穩健的人聲基頻估計' },
      ],
    },
    features: {
      eyebrow: 'ACOUSTIC · 核心引擎',
      title: '用科學，還原聲音裡被忽略的細節。',
      desc: '從 SOTA 音高引擎到專業級三欄工作台，每一個細節都為田野研究與學術寫作而設計——不只為「看見」，更為「可引用、可重現」。',
      items: [
        { title: '三套 SOTA 音高引擎', desc: 'pYIN（串流/即時，20 cent 解析度）、SwiftF0（9.5 萬參，9.2× 即時，90.2% HM 精度）、RMVPE（複音·嘈雜人聲提取）按場景自由切換，純 CPU ONNX 推理。', tag: 'pYIN · SwiftF0 · RMVPE' },
        { title: '單視窗三欄工作台', desc: '0.99 全新介面：左側分析導航 7 大視圖一鍵切換（已分析自動打勾）、中央畫布堆疊、右側檢查器即時讀數。三欄寬度、折疊、上次視圖——重啟即恢復工作現場。', tag: 'Workspace' },
        { title: 'core / full 雙包', desc: 'full 內建 AI 引擎與 FFmpeg、離線開箱即用；core 精簡約 1/6 體積、AI 組件按需下載。同一功能，按網路與儲存自選。', tag: 'Two Packages' },
        { title: '反量化連續音高', desc: '拋物線內插 + 期望值法輸出連續 Hz，忠實記錄微分音與滑音等細微差別。', tag: 'Microtone' },
        { title: '本地 AI 學術釋圖', desc: '右側一點「AI 釋圖」，連同取樣率、基頻、音分等數值上下文送入端側模型，串流生成學術釋讀，可連續追問——隱私不出機器，無網也能用。', tag: 'AI Insight' },
        { title: '參考國內外元資料要素的匯出', desc: '匯出字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元資料要素（字段對照核對中），支援自訂映射；一鍵匯出田野報告（JSON / XML / CSV）：檔案編號、專案名稱、傳承人、採集時間、地區、類別、技術資訊——讓每段聲音都有據可查、可長期儲存、可溯源，直接提交期刊與檔案館。', tag: '元資料要素 · 自訂映射' },
        { title: '極限弱設備適配', desc: '免於 Python 執行環境設定：full 包內建 AI 引擎與 FFmpeg、裝好即離線；core 包精簡約 1/6、模型首次使用按需下載（含校驗）後可離線。配合向量化 DSP 與串流處理——田野無網、設備老舊，也能順暢分析 30 分鐘長錄音。', tag: '離線可用' },
      ],
    },
    screenshots: {
      eyebrow: 'INTERFACE · 介面一覽',
      title: '一屏三欄，看盡聲音的肌理。',
      subtitle: '從頻譜、語譜到 3D 瀑布，隨開隨用、恆常不丟狀態——像操作專業 DAW 一樣整理你的聲音素材。',
      zoom: '放大查看',
      close: '關閉',
      prev: '上一張',
      next: '下一張',
      panes: [ {label:'分析導航',desc:'7 大視圖一鍵切換，已分析自動打勾'}, {label:'中央畫布堆疊',desc:'頻譜 / 語譜 / 3D 同屏常駐，切走再回原樣都在'}, {label:'檢查器 · AI',desc:'當前視圖 / 選區 / 分析窗 / 播放位置 / 音訊參數實時讀數'} ],
      shots: [ {alt:'FFT 頻譜與曲譜標註介面（三欄工作台）',label:'FFT · 頻譜與曲譜'}, {alt:'實時特徵四視窗介面',label:'實時特徵 · 四視窗監測'}, {alt:'3D 頻譜圖介面',label:'3D 頻譜圖 · 瀑布式'} ],
    },
    charts: {
      eyebrow: 'DATA · 資料與洞察',
      title: '把事實，畫成可信的證據。',
      desc: '以下資料面向研究場景，全部可核、可複現——從九大分析模組到跨平台，從測試規模到旗艦賣點。',
      c1t: '九大分析模組，四大能力族',
      c1s: '一條髮絲線 = 一個分析模組 · 氣泡大小 = 該模組數 · 時域 / 頻域·頻譜 / 音高·嗓音 / 空間·實時',
      c2t: '三大作業系統，一套完整能力',
      c2s: 'macOS · Windows · Linux · 全部實心 = 支援',
      c3t: '2965 項自動化測試，讓結果可複現',
      c3s: 'algorithm · audio I/O · UI · 每項分析都經過驗證',
      c4t: '兩大旗艦，為一個研究者的論文而設',
      c4s: '出版級出圖 + AI 釋圖 · 直投 CSSCI / SCI · gold = 旗艦/出版級',
      c5t: '一個可信賴的研究工具',
      c5s: '全核心演算法自主研發 · 開源可審計 · GPL-3.0-only · 經得起同儕評審推敲',
      fam_label: '氣泡大小 = 分析模組數　·　金 = 分析最多的能力族',
      fam: ['時域', '頻域·頻譜', '音高·嗓音', '空間·實時'],
      engines: ['波形分析', 'FFT 頻譜', '語譜圖', '3D 頻譜圖', '音高分析', '共振峰分析', '音色分析', '實時特徵', '房間模態分析'],
      cap: ['波形', 'FFT', '語譜', '音高·共振峰', '3D 頻譜', '實時'],
      omarchy: '率先支援 Omarchy',
      mods: ['波形', 'FFT', '語譜', '音高', '共振峰', '音色', '3D', '實時', 'AI'],
      testsLabel: '項自動化測試 · pytest',
      trust: [ {n:'9',label:'大分析模組',tag:'Analysis Modules'}, {n:'9',label:'套學術主題',tag:'Themes'}, {n:'5',label:'種介面語言',tag:'簡體 / 繁體 / EN / 한국어 / 日本語'}, {n:'2965',label:'項自動化測試',tag:'Automated Tests'}, {n:'5',label:'類安裝形態',tag:'Platforms'} ],
      flag: [
        { badge: '旗艦 01', title: '出版級出圖', hook: '論文裡能直接用的圖，答辯不用再修。', points: ['匯出與所見完全一致，SVG / PDF 向量 + PNG 點陣任選', '內建出版級字體與配色，中文與樂理符號不亂不糊', '自訂解析度與圖尺寸，直投 CSSCI / SCI', '一張圖配一份說明，圖表編號與註釋由它來管'], stats: [{ n: '6', l: '匯出格式' }, { n: '300', l: 'DPI 可調' }] },
        { badge: '旗艦 02', title: 'AI 釋圖', hook: '它以學術審稿人的視角，幫你讀頻譜。', points: ['自動辨識譜峰、泛音序列與共振峰結構，中文學術語境解釋', '給出可直接寫進論文的分析段落草稿，省一半文字工時', '雙語切換輸出，國際會議投稿不用自己翻', '可提示的研究建議，下一步看哪裡它會提醒'], stats: [{ n: '多', l: 'Provider 可選' }, { n: '30', l: 'AI 測試項' }] },
      ],
      rowPrec: '精度',
      rowUse: '適用場景',
      stdArchive: '參考的元資料要素',
      stdArchiveNote: '欄位對照核對中（不作符合性聲明）',
      pitchEng: '音高引擎',
    },
    vision: {
      eyebrow: '為聲音立傳 · 工作室願景',
      title: '關於縉雲聲智',
      quote: '「我們相信，聲音裡藏著一個民族的審美、一個時代的記憶；而好的工具，讓這些證據被看見、被引用、被傳承。」',
      bodyTop: '縉雲聲智（Jinyun SonicAI）是西南大學音樂聲學實驗室面向創新應用落地的品牌之一，專注於音樂聲學、音樂科技、數位人文與 AI 應用的交叉研究。',
      bodyBottom: 'AcouScope（音析）是工作室為音樂與聲音研究傾力打造的分析引擎——讓研究、教學與創作，都能憑一套軟體完成從田野採風到論文出版的全流程。',
      badges: ['西南大學', '音樂聲學 · 數位人文', '開源可審計 · GPL-3.0-only'],
    },
    stats: {
      engines: '套音高引擎',
      tests: '項自動化測試',
      realtime: '倍即時',
      themes: '套學術主題',
    },
    download: {
      eyebrow: 'DOWNLOAD',
      title: '下載 AcouScope',
      subtitle: 'macOS（Apple Silicon / Intel）、Windows x64、Linux x86_64 構建包已全部就緒，選擇你的系統即可下載。',
      heroBtn: '下載',
      recommend: '為您推薦',
      allTitle: '全部平台與版本',
      coming: '即將發布',
      note: 'GPL-3.0-only · 開源可審計 · 按需贊助',
      releaseHint: '下載後可對照 Release 頁的 sha256 校驗包體完整性。',
      faqHint: '首次開啟被攔？見說明頁「遇到問題怎麼辦」。',
    },
    faq: {
      title: '遇到問題怎麼辦',
      items: [
        '首次開啟被系統攔截（macOS）：提示「無法開啟」或「無法驗證開發者」時，在應用圖示上右鍵（或按住 Control 點擊）▸ 開啟，彈窗裡再點一次「開啟」。只需這一次，之後雙擊即可正常開啟。Windows 如遇 SmartScreen 藍色提示，點「更多資訊」▸「執行」。',
        '若右鍵開啟仍無效：在本機終端執行一條命令，僅移除 AcouScope 自身的「隔離」標記：xattr -d com.apple.quarantine "/Applications/AcouScope.app"。背景：本版有意未做 Apple 付費公證，系統會把所有網路下載、未經公證的 App 預設標為「未驗證」；這條命令只針對本應用自身放行，不更改任何系統安全設定，也不影響其他應用。',
        '想確認下載檔完整未被竄改：發布頁會給出每個安裝檔的 sha256 校驗值。下載後在本機核對：macOS 終端執行 shasum -a 256 加檔名；Windows PowerShell 執行 Get-FileHash 檔名。兩串完全一致再安裝。',
        'mp3 / m4a 打不開、或 AI 解讀不可用：多半是裝了 core 輕量套件——它不內建 FFmpeg 與本地 AI 引擎（播放音訊通常不受影響，受影響的是這類格式的分析解碼）。請改用 full 完整套件，或自行安裝 FFmpeg；AI 解讀元件也可在設定裡按需下載。',
        '下載慢、下載失敗或遇到其他問題：換個網路重試；仍解決不了請發信到 sfklc@hotmail.com，或加入官方微信群（應用內工具欄「加入官方微信群」有 QR Code）。回饋時請附：你在做哪一步、期望看到什麼、實際看到什麼，最好附一張截圖——這一句話對我們值一整天。',
      ],
    },
    cta: {
      title: '讓每一段聲音，都成為可引用的證據。',
      subtitle: '面向音樂學、聲學與數位人文研究，從測量到檔案化一氣呵成。',
      button: '查看下載方式',
    },
    footer: {
      tagline: '測度其所鳴，留證其所存。',
      contact: '聯絡方式',
      license: '授權',
      rights: '© 2026 縉雲聲智（Jinyun SonicAI）\n西南大學藝術人類學研究所 · 西南大學中國音樂心理健康研究所',
      special: '謹以此軟體，特別鳴謝並獻予音樂聲學領軍學者、國務院特殊津貼專家：韓寶強 教授。',
      version: 'v0.99.20260925',
      licenseValue: '開源可審計 · GPL-3.0-only',
    },
    changelog: {
      eyebrow: 'CHANGELOG · 開發日誌',
      headline: 'v0.98 → v0.99，九類更新',
      legend: '★ 為本版重磅（應最先看到）；每條一行，數字與站點口徑一致。',
    },
    help: {
      eyebrow: 'HELP · 幫助',
      headline: '快速入門：十四步上手',
      legend: '內容鏡像自 AcouScope 應用內「說明 → 快速入門」（三語各 14 條，逐字一致）。',
      shortcutsTitle: '快速鍵說明',
      shortcutsNote: 'macOS 上 Ctrl 對應 Cmd；其中「重做」在 macOS 為 Cmd+Shift+Z。',
    },
  },
  en: {
    meta: {
      title: 'AcouScope — Measure why it sounds, preserve why it endures | Jinyun SonicAI',
      desc: 'A next-generation acoustic analysis engine for research fields such as musicology, acoustics and the digital humanities: three SOTA pitch engines, a three-pane workspace, local AI chart interpretation, and field-metadata export — smooth even on weak devices.',
    },
    brand: { name: 'Jinyun SonicAI', en: 'Jinyun SonicAI' },
    nav: { product: 'Product', features: 'Features', vision: 'Vision', download: 'Download', changelog: 'Changelog', help: 'Help' },
    hero: {
      badge: 'Sound research · archivable & traceable · reference to international & Chinese archive metadata elements',
      slogan: 'Measure why it sounds, preserve why it endures.',
      subtitle:
        'AcouScope is a next-generation acoustic analysis engine for research fields such as musicology, acoustics and the digital humanities. Whether you are an ethnomusicologist tracing a guqin’s harmonics, a vocal researcher analyzing a singer’s microtones, or an audio engineer measuring a room’s reverb, it turns your auditory intuition into measurable, citable, reproducible acoustic evidence. Exported fields reference metadata elements from IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 (field-by-field mapping under review), with custom mapping supported, so every recording stays archivable long-term and traceable. The three-pane workspace keeps spectrum, spectrogram and 3D views at hand, so analysis stays smooth and unbroken.',
      cta1: 'Download',
      cta2: 'Explore three pitch engines',
      version: 'v0.99.20260925',
      chip: 'SOTA deep-learning core · single-window three-pane workspace · local AI interpretation',
    },
    product: {
      label: 'FOR MUSICOLOGY & DIGITAL HUMANITIES',
      title: 'Meet AcouScope',
      body: 'AcouScope is a professional acoustic analysis application for research across musicology, acoustics and the digital humanities. With a rigorous, scholarly approach, it unites the measurement, analysis and archiving of sound — from classroom demonstration and fieldwork capture to publication figures and long-term audio preservation. Three SOTA pitch-detection engines (pYIN / SwiftF0 / RMVPE) switch flexibly by research scenario and run efficiently on CPU alone; its de-quantized continuous-pitch technology faithfully preserves the subtle nuances of microtones and glides; AI interpretation and field-metadata export reference metadata elements from IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 (field-by-field mapping under review), with custom mapping supported, making analysis figures clear and trustworthy and every recording traceable and durably storable. Nine themes and a bilingual interface (Simplified & Traditional Chinese / English) balance scholarly rigor with everyday comfort.',
      spectrum: 'Single-window three-pane workspace · three pitch engines',
      quick: [
        { n: '3×', l: 'Pitch engines' },
        { n: '9.2×', l: 'Realtime' },
        { n: '<140MB', l: 'Peak memory' },
        { n: '196s', l: 'Per 30-min' },
      ],
    },
    pitch: {
      eyebrow: 'PITCH · ENGINES',
      title: 'Three SOTA pitch-detection engines',
      subtitle: 'Switch freely by research scenario, on pure-CPU inference — from streaming preview to a weak device in the field.',
      common: 'Pure-CPU ONNX inference · 30-min recording in ~196 s · peak memory < 140 MB',
      engines: [
        { name: 'pYIN', role: 'Classic algorithm · probabilistic YIN', acc: '20-cent resolution', use: 'Streaming preview, live analysis' },
        { name: 'SwiftF0', role: 'Deep neural model · monophonic pitch', acc: '90.2% HM · 9.2× realtime', use: '95k-param lightweight model, ideal for weak devices' },
        { name: 'RMVPE', role: 'Deep neural model · polyphonic vocal', acc: 'Robust in polyphonic / noisy settings', use: 'Robust vocal pitch estimation in polyphonic music' },
      ],
    },
    features: {
      eyebrow: 'ACOUSTIC · CORE ENGINE',
      title: 'Use science to recover the details sound hides.',
      desc: 'From the SOTA pitch core to a pro-grade workspace, every detail is designed for field research and academic writing — not just to "see", but to cite and reproduce.',
      items: [
        {
          title: 'Three SOTA pitch engines',
          desc: 'pYIN (streaming/live, 20-cent resolution), SwiftF0 (95k params, 9.2× realtime, 90.2% HM) and RMVPE (polyphonic/noisy vocal) switch per scenario, all on pure-CPU ONNX.',
          tag: 'pYIN · SwiftF0 · RMVPE',
        },
        {
          title: 'Single-window three-pane workspace',
          desc: 'The new 0.99 UI: left analysis nav for 7 views (auto-checked when analyzed), a central stacked canvas, and a right inspector with live readings. Pane widths, collapses and last view restore on restart.',
          tag: 'Workspace',
        },
        {
          title: 'core / full packages',
          desc: 'full bundles the AI engine and FFmpeg for offline out-of-the-box use; core is about 1/6 the size and fetches AI components on demand. Same capabilities — pick by network and storage.',
          tag: 'Two Packages',
        },
        {
          title: 'De-quantized continuous pitch',
          desc: 'Parabolic interpolation + expectation method outputs continuous Hz, faithfully capturing microtones and glides.',
          tag: 'Microtone',
        },
        {
          title: 'Local AI chart interpretation',
          desc: 'One click on "AI Interpret" sends the current view with sample rate, F0, cents and confidence to an on-device model, streaming an academic reading you can keep asking — private, offline.',
          tag: 'AI Insight',
        },
        {
          title: 'Export referencing international & Chinese metadata elements',
          desc: 'Exported fields reference metadata elements from IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 (field-by-field mapping under review), with custom mapping supported; one-click field-report export (JSON / XML / CSV): archive no., project, informant, capture time, region, category, technical info — every recording verifiable, durable and traceable, ready for journals and archives.',
          tag: 'Metadata elements · custom mapping',
        },
        {
          title: 'Runs on weak devices',
          desc: 'No Python environment to configure: the full package bundles the AI engine and FFmpeg and runs offline out of the box; the core package is about 1/6 the size and fetches models on first use (with verification), then works offline. With vectorized DSP and streaming, even offline fieldwork on old hardware handles 30-minute recordings smoothly.',
          tag: 'Offline after first run',
        },
      ],
    },
    screenshots: {
      eyebrow: 'INTERFACE · AT A GLANCE',
      title: 'Three panes, one view into the texture of sound.',
      subtitle: 'Spectrum, spectrogram and 3D waterfall — always ready, never losing state, like a professional DAW for your sound research.',
      zoom: 'Zoom in',
      close: 'Close',
      prev: 'Previous',
      next: 'Next',
      panes: [ {label:'Analysis navigation',desc:'Switch among 7 views with one click; analyzed views auto-check'}, {label:'Center canvas stack',desc:'Spectrum / spectrogram / 3D stay side by side, state always preserved'}, {label:'Inspector · AI',desc:'Live readings of view / selection / analysis window / playback / audio params'} ],
      shots: [ {alt:'FFT spectrum and note annotation interface (three-pane workspace)',label:'FFT · Spectrum & Notation'}, {alt:'Realtime features four-pane interface',label:'Realtime · Four-pane monitor'}, {alt:'3D spectrogram interface',label:'3D Spectrogram · Waterfall'} ],
    },
    charts: {
      eyebrow: 'DATA · INSIGHTS',
      title: 'Turning facts into trustworthy evidence.',
      desc: 'These figures are research-oriented, verifiable and reproducible — from nine analysis modules to cross-platform, from test coverage to flagship features.',
      c1t: 'Nine analysis modules, four capability families',
      c1s: 'One hairline = one analysis module · bubble size = module count · Time-domain / Frequency·Spectrum / Pitch·Voice / Space·Realtime',
      c2t: 'Three operating systems, one complete capability',
      c2s: 'macOS · Windows · Linux · all filled = supported',
      c3t: '2965 automated tests, reproducible results',
      c3s: 'algorithm · audio I/O · UI · every analysis verified',
      c4t: 'Two flagship features for a researcher’s paper',
      c4s: 'Publication-grade figures + AI interpretation · target CSSCI / SCI · gold = flagship',
      c5t: 'A trustworthy research tool',
      c5s: 'Core algorithms built in-house · open-source & auditable · GPL-3.0-only · stands up to peer review',
      fam_label: 'Bubble size = number of analysis modules · gold = family with most modules',
      fam: ['Time-domain', 'Frequency·Spectrum', 'Pitch·Voice', 'Space·Realtime'],
      engines: ['Waveform', 'FFT Spectrum', 'Spectrogram', '3D Spectrogram', 'Pitch', 'Formant', 'Timbre', 'Realtime', 'Room Mode'],
      cap: ['Waveform', 'FFT', 'Spectrogram', 'Pitch·Formant', '3D', 'Realtime'],
      omarchy: 'First to support Omarchy',
      mods: ['Wave', 'FFT', 'Spec', 'Pitch', 'Formant', 'Timbre', '3D', 'Live', 'AI'],
      testsLabel: 'automated tests · pytest',
      trust: [
        { n: '9', label: 'analysis modules', tag: 'Analysis Modules' },
        { n: '9', label: 'academic themes', tag: 'Themes' },
        { n: '5', label: 'interface languages', tag: '简体 / 繁體 / EN / 한국어 / 日本語' },
        { n: '2965', label: 'automated tests', tag: 'Automated Tests' },
        { n: '5', label: 'install types', tag: 'Platforms' },
      ],
      flag: [
        { badge: 'FLAGSHIP 01', title: 'Publication-grade figures', hook: 'Figures ready for your paper, no further fixes at your defense.', points: ['WYSIWYG export — SVG / PDF vector + PNG bitmap', 'Publication-grade fonts & palettes, CJK and notation stay crisp', 'Custom resolution & size, target CSSCI / SCI', 'One figure with a caption; numbering & notes handled'], stats: [{ n: '6', l: 'Formats' }, { n: '300', l: 'DPI' }] },
        { badge: 'FLAGSHIP 02', title: 'AI interpretation', hook: 'It reads your spectrum like an academic reviewer.', points: ['Auto-detects spectral peaks, harmonic series and formants, explained in scholarly terms', 'Drafts analysis paragraphs you can drop into your paper', 'Switches language for international submissions', 'Suggests what to examine next'], stats: [{ n: 'Multi', l: 'Providers' }, { n: '30', l: 'AI tests' }] },
      ],
      rowPrec: 'Accuracy',
      rowUse: 'Use case',
      stdArchive: 'Referenced metadata elements',
      stdArchiveNote: 'Field-by-field mapping under review (no conformance claim)',
      pitchEng: 'Pitch engines',
    },
    vision: {
      eyebrow: 'A VOICE FOR SOUND · OUR VISION',
      title: 'About Jinyun SonicAI',
      quote: '“We believe sound holds a culture’s aesthetic and an era’s memory — and a great tool makes that evidence seen, cited and preserved.”',
      bodyTop: 'Jinyun SonicAI is one of the brands launched by the Southwest University Musical Acoustics Lab for innovative applications, focused on the intersection of musical acoustics, music technology, digital humanities and AI research.',
      bodyBottom: 'AcouScope is the studio’s acoustic analysis engine for music and sound research — delivering the complete workflow from field recording to published figures in one application.',
      badges: ['Southwest University', 'Musical Acoustics · Digital Humanities', 'Open-source & auditable · GPL-3.0-only'],
    },
    stats: {
      engines: 'pitch engines',
      tests: 'automated tests',
      realtime: '× realtime',
      themes: 'themes',
    },
    download: {
      eyebrow: 'DOWNLOAD',
      title: 'Download AcouScope',
      subtitle: 'Builds for macOS (Apple Silicon / Intel), Windows x64 and Linux x86_64 are all ready — pick your system to download.',
      heroBtn: 'Download',
      recommend: 'Recommended for you',
      allTitle: 'All platforms & builds',
      coming: 'Coming soon',
      note: 'GPL-3.0-only · open-source & auditable · optional sponsorship',
      releaseHint: 'After downloading, verify the file against the sha256 listed on the Release page.',
      faqHint: 'Blocked on first launch? See "What to do if something goes wrong" in Help.',
    },
    faq: {
      title: 'What to do if something goes wrong',
      items: [
        'Blocked on first launch (macOS): if you see "cannot be opened" or "cannot verify the developer", right-click (or Control-click) the app icon and choose Open, then click Open in the dialog. This is needed only once; afterwards it opens normally. On Windows, if SmartScreen appears, click "More info" then "Run anyway".',
        'If Open-still-fails: run one command in Terminal to remove the quarantine attribute from AcouScope itself: xattr -d com.apple.quarantine "/Applications/AcouScope.app". Why: this release intentionally ships without Apple notarization, so macOS marks every downloaded, un-notarized app as unverified by default. The command affects only this one app — it changes no system security settings and no other apps.',
        'Want to verify your download is intact? Each release page lists the sha256 of every installer. Check locally: on macOS run shasum -a 256 <file>; on Windows PowerShell run Get-FileHash <file>. Install only if the two strings match exactly.',
        'mp3 / m4a won\'t open, or AI interpretation is unavailable? You likely installed the core package — it does not bundle FFmpeg or the local AI engine (audio playback is usually unaffected; analysis decoding of those formats is). Use the full package instead, or install FFmpeg yourself; AI components can also be downloaded on demand in Settings.',
        'Slow or failed downloads, or anything else: retry on a different network; if it persists, email sfklc@hotmail.com or join our official WeChat group (QR code inside "Join Official WeChat Group" on the toolbar). When reporting, tell us which step you were on, what you expected, and what you actually saw — a screenshot helps. One sentence like that saves us a whole day.',
      ],
    },
    cta: {
      title: 'Make every sound citable evidence.',
      subtitle: 'For research across musicology, acoustics and the digital humanities — from measurement to archiving in one go.',
      button: 'See download options',
    },
    footer: {
      tagline: 'Measure why it sounds, preserve why it endures.',
      contact: 'Contact',
      license: 'License',
      rights: '© 2026 Jinyun SonicAI\nSouthwest University Art Anthropology Institute · Southwest University China Music Mental Health Institute',
      special: 'Dedicated with gratitude to the leading scholar in musical acoustics and expert of the State Council Special Allowance: Prof. Han Baoqiang.',
      version: 'v0.99.20260925',
      licenseValue: 'Open-source & auditable · GPL-3.0-only',
    },
    changelog: {
      eyebrow: 'CHANGELOG',
      headline: 'v0.98 → v0.99, nine categories of updates',
      legend: '★ marks the headline items of this release; one line each, numbers consistent with the rest of the site.',
    },
    help: {
      eyebrow: 'HELP',
      headline: 'Quick start: fourteen steps to get going',
      legend: 'Mirrored word for word from the in-app Help → Quick Start (14 items per language).',
      shortcutsTitle: 'Keyboard shortcuts',
      shortcutsNote: 'On macOS, Ctrl corresponds to Cmd; “Redo” is Cmd+Shift+Z on macOS.',
    },
  },
  ko: {
    meta: {
      title: 'AcouScope — 소리의 측정을 기록하고, 증거를 보존하다 | Jinyun SonicAI',
      desc: '음악학·음향학·디지털 휴머니티스 연구 분야를 위한 차세대 음향 분석 엔진: 3개의 SOTA 피치 엔진, 3패널 워크스페이스, 로컬 AI 차트 해석, 필드 메타데이터 내보내기 — 사양이 낮은 기기에서도 부드럽게 동작합니다.',
    },
    brand: { name: 'Jinyun SonicAI', en: 'Jinyun SonicAI' },
    nav: { product: '제품', features: '기능', vision: '비전', download: '다운로드', changelog: '개발 로그', help: '도움말' },
    hero: {
      badge: '소리 연구 · 아카이빙 가능, 추적 가능 · 국제 및 중국 아카이브 메타데이터 요소 참조',
      slogan: '소리의 측정을 기록하고, 증거를 보존하다.',
      subtitle: 'AcouScope는 음악학·음향학·디지털 휴머니티스 연구 분야를 위한 차세대 음향 분석 엔진입니다. 거금의 하모닉스를 연구하는 민족음악학자, 창법의 피치를 분석하는 성악 연구자, 연습실의 잔향을 측정하는 오디오 엔지니어든, 듣기 직관을 정량화·인용·재현 가능한 음향 증거로 번역합니다. 내보내기 필드는 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 등 메타데이터 요소를 참조(필드 대조 확인 진행 중)하며 사용자 정의 매핑을 지원하여, 모든 녹음이 장기 아카이빙되고 추적 가능하게 합니다. 3패널 워크스페이스로 스펙트럼·스펙트로그램·3D 뷰를 언제든 열어, 연구 정리를 한 번에 끝냅니다.',
      cta1: '다운로드',
      cta2: '3종 피치 엔진 보기',
      version: 'v0.99.20260925',
      chip: 'SOTA 딥러닝 기반 · 단일 창 3패널 워크스페이스 · 로컬 AI 해석',
    },
    product: {
      label: '음악학과 디지털 휴머니티스를 위한',
      title: 'AcouScope를 만나다',
      body: 'AcouScope는 음악학·음향학·디지털 휴머니티스 등 분야 연구를 위한 전문 음향 분석 소프트웨어로, 엄격한 학술 태도로 소리의 측정·분석·아카이빙을 하나로 통합합니다 — 강의실 데모, 필드 채록부터 논문 도표와 장기 음원 보존까지 모두 소화합니다. 소프트웨어에는 3개의 SOTA 피치 탐지 엔진(pYIN / SwiftF0 / RMVPE)이 내장되어 연구 시나리오에 따라 유연하게 전환되며, CPU만으로 고효율 추론이 가능합니다. 탈양자화 연속 피치 기술은 미세음과 글라이드 같은 미묘한 차이를 충실히 복원하고, AI 해석과 필드 메타데이터 내보내기는 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 등 메타데이터 요소를 참조(필드 대조 확인 진행 중)하며 사용자 정의 매핑을 지원하여, 분석 차트가 명확하고 신뢰할 수 있게 하며 모든 녹음이 근거를 갖고 장기 보존되게 합니다. 소프트웨어는 9종 테마와 이중 언어 인터페이스(간체 중국어 / 번체 중국어 / English)를 제공하여, 학술 연구의 엄격함과 일상 사용의 편안함을 모두 챙깁니다.',
      spectrum: '단일 창 3패널 워크스페이스 · 3종 피치 엔진',
      quick: [
        { n: '3×', l: '피치 엔진' },
        { n: '9.2×', l: '실시간 배수' },
        { n: '<140MB', l: '피크 메모리' },
        { n: '196s', l: '30분당' },
      ],
    },
    pitch: {
      eyebrow: 'PITCH · 피치 엔진',
      title: '3개의 SOTA 피치 탐지 엔진',
      subtitle: '연구 시나리오에 따라 자유롭게 전환, 순수 CPU 추론 — 스트리밍 미리보기부터 필드의 사양 낮은 기기까지 가볍게 소화합니다.',
      common: '순수 CPU ONNX 추론 · 30분 장시간 녹음 약 196초 분석 · 피크 메모리 < 140MB',
      engines: [
        { name: 'pYIN', role: '고전 알고리즘 · 확률화 YIN', acc: '20 cent 해상도', use: '스트리밍 미리보기, 실시간 분석' },
        { name: 'SwiftF0', role: '딥 뉴럴 모델 · 단음 피치', acc: '90.2% HM 정확도 · 9.2× 고배 실시간', use: '9.5만 파라미터 경량 모델, 사양 낮은 기기의 첫 선택' },
        { name: 'RMVPE', role: '딥 뉴럴 모델 · 복음 보컬', acc: '복음 / 소음 환경에서 안정적', use: '복음 음악에서 안정적인 보컬 기본주파수 추정' },
      ],
    },
    features: {
      eyebrow: 'ACOUSTIC · 코어 엔진',
      title: '과학으로, 소리에 숨겨진 세부 사항을 복원합니다.',
      desc: 'SOTA 피치 코어부터 프로급 3패널 워크스페이스까지, 모든 세부 사항은 필드 연구와 학술 작성을 위해 설계되었습니다 — “보이는” 것을 넘어 “인용·재현 가능한” 것을 위해.',
      items: [
        { title: '3개의 SOTA 피치 엔진', desc: 'pYIN(스트리밍/실시간, 20 cent 해상도), SwiftF0(9.5만 파라미터, 9.2× 실시간, 90.2% HM 정확도), RMVPE(복음·소음 보컬 추출)를 시나리오에 따라 자유롭게 전환, 순수 CPU ONNX 추론.', tag: 'pYIN · SwiftF0 · RMVPE 3종' },
        { title: '단일 창 3패널 워크스페이스', desc: '0.99 신규 인터페이스: 왼쪽 분석 내비게이션 7개 뷰 원클릭 전환(분석 완료 자동 체크), 중앙 캔버스 스택, 오른쪽 인스펙터 실시간 읽기값. 패널 너비, 접힘 상태, 마지막 뷰 — 재시작 시 작업 현장 그대로 복원.', tag: 'Workspace' },
        { title: 'core / full 듀얼 패키지', desc: 'full은 AI 엔진과 FFmpeg를 내장해 오프라인에서 바로 사용; core는 약 1/6 크기로 AI 구성 요소를 필요 시 다운로드합니다. 동일한 기능, 네트워크와 저장 공간에 따라 선택하세요.', tag: 'Two Packages' },
        { title: '탈양자화 연속 피치', desc: '파라볼라 보간 + 기댓값법으로 연속 Hz를 출력하여, 미세음과 글라이드 같은 미묘한 차이를 충실히 기록합니다.', tag: 'Microtone' },
        { title: '로컬 AI 학술 해석', desc: '오른쪽에서 “AI 해석”을 클릭하면, 샘플링 레이트·기본주파수·센트 등 수치 컨텍스트를 기종 내 모델에 보내 학술 해석을 스트리밍 생성하며 연속으로 더 질문할 수 있습니다 — 개인정보는 기기를 벗어나지 않고, 오프라인에서도 사용 가능합니다.', tag: 'AI Insight' },
        { title: '국내외 메타데이터 요소 참조 내보내기', desc: '내보내기 필드는 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 등 메타데이터 요소를 참조(필드 대조 확인 진행 중)하며 사용자 정의 매핑을 지원합니다; 원클릭 필드 보고서 내보내기(JSON / XML / CSV): 아카이브 번호, 프로젝트명, 전승자, 채집 시간, 지역, 분류, 기술 정보 — 모든 소리가 근거를 갖고 장기 아카이빙·추적 가능하게 하며, 학술지와 아카이브에 바로 제출할 수 있습니다.', tag: '메타데이터 요소 · 사용자 정의 매핑' },
        { title: '극한 사양 낮은 기기 대응', desc: 'Python 실행 환경 설정 불필요: full 패키지는 AI 엔진과 FFmpeg를 내장해 설치 즉시 오프라인; core 패키지는 약 1/6 크기로 모델을 처음 사용할 때 필요 시 다운로드(검증 포함)한 뒤 오프라인으로 사용합니다. 벡터화 DSP와 스트리밍 처리로 필드에 네트워크가 없고 기기가 오래돼도 30분 장시간 녹음을 부드럽게 분석합니다.', tag: '오프라인 사용 가능' },
      ],
    },
    screenshots: {
      eyebrow: 'INTERFACE · 인터페이스 한눈에',
      title: '한 화면 3패널, 소리의 질감을 끝까지 봅니다.',
      subtitle: '스펙트럼·스펙트로그램부터 3D 워터폴까지, 언제든 열어 상태가 절대 안 사라집니다 — 프로 DAW를 다루듯 소리 자료를 정리하세요.',
      zoom: '확대 보기',
      close: '닫기',
      prev: '이전',
      next: '다음',
      panes: [ {label:'분석 내비게이션',desc:'7개 뷰 원클릭 전환, 분석 완료 자동 체크'}, {label:'중앙 캔버스 스택',desc:'스펙트럼 / 스펙트로그램 / 3D를 같은 화면에 상시 배치, 떠났다 돌아와도 그대로'}, {label:'인스펙터 · AI',desc:'현재 뷰 / 선택 영역 / 분석 창 / 재생 위치 / 오디오 파라미터 실시간 읽기값'} ],
      shots: [ {alt:'FFT 스펙트럼과 악보 주석 인터페이스（3패널 워크스페이스）',label:'FFT · 스펙트럼과 악보'}, {alt:'실시간 특징 4창 인터페이스',label:'실시간 특징 · 4창 모니터링'}, {alt:'3D 스펙트로그램 인터페이스',label:'3D 스펙트로그램 · 워터폴'} ],
    },
    charts: {
      eyebrow: 'DATA · 데이터와 인사이트',
      title: '사실을, 신뢰할 수 있는 증거로 그립니다.',
      desc: '다음 데이터는 연구 시나리오를 위해, 전부 검증·재현 가능합니다 — 9대 분석 모듈부터 크로스 플랫폼까지, 테스트 규모부터 플래그십 셀링 포인트까지.',
      c1t: '9대 분석 모듈, 4대 능력 패밀리',
      c1s: '머리카락 한 올 = 분석 모듈 1개 · 버블 크기 = 해당 모듈 수 · 시영역 / 주파수영역·스펙트럼 / 피치·목소리 / 공간·실시간',
      c2t: '3대 운영체제, 하나의 완전한 능력',
      c2s: 'macOS · Windows · Linux · 전부 채움 = 지원',
      c3t: '2965개 자동화 테스트, 재현 가능한 결과',
      c3s: 'algorithm · audio I/O · UI · 모든 분석 항목 검증 완료',
      c4t: '연구자 한 명의 논문을 위한 2대 플래그십',
      c4s: '출판급 도표 + AI 해석 · CSSCI / SCI 바로 투고 · gold = 플래그십/출판급',
      c5t: '신뢰할 수 있는 연구 도구 하나',
      c5s: '핵심 알고리즘 전부 자체 개발 · 오픈소스 감사 가능 · GPL-3.0-only · 동료 심사 검토를 견뎌냄',
      fam_label: '버블 크기 = 분석 모듈 수　·　금색 = 분석이 가장 많은 능력 패밀리',
      fam: ['시영역', '주파수영역·스펙트럼', '피치·목소리', '공간·실시간'],
      engines: ['웨이브폼 분석', 'FFT 스펙트럼', '스펙트로그램', '3D 스펙트로그램', '피치 분석', '포먼트 분석', '음색 분석', '실시간 특징', '룸 모드 분석'],
      cap: ['웨이브폼', 'FFT', '스펙트로그램', '피치·포먼트', '3D 스펙트럼', '실시간'],
      omarchy: 'Omarchy 최초 지원',
      mods: ['웨이브', 'FFT', '스펙트', '피치', '포먼트', '음색', '3D', '라이브', 'AI'],
      testsLabel: '개 자동화 테스트 · pytest',
      trust: [
        { n: '9', label: '대 분석 모듈', tag: 'Analysis Modules' },
        { n: '9', label: '종 학술 테마', tag: 'Themes' },
        { n: '5', label: '종 인터페이스 언어', tag: '간체 / 번체 / EN / 한국어 / 日本語' },
        { n: '2965', label: '개 자동화 테스트', tag: 'Automated Tests' },
        { n: '5', label: '종 설치 형태', tag: 'Platforms' },
      ],
      flag: [
        { badge: '플래그십 01', title: '출판급 도표', hook: '논문에서 바로 쓸 수 있는 도표, 발표 때 다시 고칠 필요 없음.', points: ['내보내기가 보이는 것과 완전히 일치, SVG / PDF 벡터 + PNG 비트맵 선택 가능', '출판급 폰트와 색상을 내장하여, 중국어와 악보 기호가 어긋나거나 흐려지지 않음', '해상도와 도표 크기 사용자 지정, CSSCI / SCI 바로 투고', '도표 하나에 설명 하나, 도표 번호와 주석은 이 도구가 관리'], stats: [{ n: '6', l: '내보내기 형식' }, { n: '300', l: 'DPI 조절 가능' }] },
        { badge: '플래그십 02', title: 'AI 해석', hook: '학술 심사자의 시선으로, 당신의 스펙트럼을 읽습니다.', points: ['스펙트럼 피크, 하모닉 계열과 포먼트 구조를 자동 식별하여, 중국어 학술 맥락으로 설명', '논문으로 바로 쓸 수 있는 분석 문단 초안을 제공하여, 글쓰기 공수를 절반으로', '이중 언어 전환 출력, 국제 학회 투고를 직접 번역할 필요 없음', '제시 가능한 연구 제안, 다음에 어디를 볼지 알려 줌'], stats: [{ n: '다수', l: 'Provider 선택 가능' }, { n: '30', l: 'AI 테스트 항목' }] },
      ],
      rowPrec: '정확도',
      rowUse: '적용 시나리오',
      stdArchive: '참조한 메타데이터 요소',
      stdArchiveNote: '필드 대조 확인 진행 중(표준 관련 선언을 하지 않음)',
      pitchEng: '피치 엔진',
    },
    vision: {
      eyebrow: '소리를 위해 전기를 세우다 · 스튜디오 비전',
      title: 'Jinyun SonicAI 소개',
      quote: '“우리는 믿습니다. 소리 안에는 한 민족의 미감과 한 시대의 기억이 숨어 있으며, 좋은 도구는 이 증거가 보이고, 인용되고, 전승되게 합니다.”',
      bodyTop: 'Jinyun SonicAI는 서남대학교 음악음향학 실험실이 혁신적 응용 실현을 위해 세운 브랜드 중 하나로, 음악음향학·음악기술·디지털 휴머니티스와 AI 응용의 교차 연구를 전문으로 합니다.',
      bodyBottom: 'AcouScope는 스튜디오가 음악과 소리 연구를 위해 온 힘을 다해 만든 분석 엔진입니다 — 연구, 교육, 창작 모두 하나의 소프트웨어로 필드 채집부터 논문 출판까지 전 과정을 완수할 수 있습니다.',
      badges: ['서남대학교', '음악음향학 · 디지털 휴머니티스', '오픈소스 감사 가능 · GPL-3.0-only'],
    },
    stats: {
      engines: '종 피치 엔진',
      tests: '개 자동화 테스트',
      realtime: '배 실시간',
      themes: '종 학술 테마',
    },
    download: {
      eyebrow: 'DOWNLOAD',
      title: 'AcouScope 다운로드',
      subtitle: 'macOS(Apple Silicon / Intel), Windows x64, Linux x86_64 빌드 패키지가 모두 준비되었습니다. 사용 중인 시스템을 선택해 다운로드하세요.',
      heroBtn: '다운로드',
      recommend: '추천',
      allTitle: '전체 플랫폼과 버전',
      coming: '출시 예정',
      note: 'GPL-3.0-only · 오픈소스 감사 가능 · 필요에 따른 후원',
      releaseHint: '다운로드 후 Release 페이지에 기재된 sha256과 대조하여 파일 무결성을 검증할 수 있습니다.',
      faqHint: '첫 실행에서 차단되었나요? 도움말의 "문제 발생 시 해결 방법"을 보세요.',
    },
    faq: {
      title: '문제 발생 시 해결 방법',
      items: [
        '첫 실행 시 차단됨(macOS): "열 수 없음" 또는 "개발자 확인 불가" 메시지가 뜨면 앱 아이콘을 우클릭(또는 Control+클릭) ▸ "열기"를 선택하고, 대화상자에서 다시 "열기"를 누르세요. 처음 한 번만 그러면 이후에는 정상 실행됩니다. Windows에서 SmartScreen이 나타나면 "추가 정보" ▸ "실행"을 선택하세요.',
        '그래도 열리지 않으면: 터미널에서 한 명령어로 AcouScope 자체의 격리 속성만 제거하세요: xattr -d com.apple.quarantine "/Applications/AcouScope.app". 배경: 이 릴리스는 의도적으로 Apple 공증을 생략했기에, macOS는 공증되지 않은 모든 다운로드 앱을 기본으로 미확인 상태로 표시합니다. 이 명령은 이 앱에만 적용되며 시스템 보안 설정이나 다른 앱에는 영향을 주지 않습니다.',
        '다운로드 파일의 무결성을 확인하려면: 각 배포 페이지에 설치 파일별 sha256 값이 게시됩니다. 로컬에서 확인하세요 — macOS: shasum -a 256 <파일>, Windows PowerShell: Get-FileHash <파일>. 두 값이 완전히 일치할 때만 설치하세요.',
        'mp3 / m4a가 열리지 않거나 AI 해석을 쓸 수 없다면: core 패키지를 설치한 것일 수 있습니다 — core에는 FFmpeg과 로컬 AI 엔진이 포함되어 있지 않습니다(재생은 보통 영향이 없고, 해당 형식의 분석 디코딩에 영향). full 패키지를 쓰거나 FFmpeg을 직접 설치하세요. AI 구성 요소는 설정에서 필요할 때 다운로드할 수 있습니다.',
        '다운로드가 느리거나 실패하거나 기타 문제: 다른 네트워크로 재시도하세요. 해결되지 않으면 sfklc@hotmail.com 으로 메일이나, 공식 WeChat 그룹(앱 내 툴바의 "공식 WeChat 그룹 가입"에 QR 코드)으로 알려주세요. 신고 시: 어떤 단계인지, 무엇을 기대했는지, 실제로 무엇을 봤는지 — 스크린샷이 있으면 좋습니다. 그 한 문장이 우리에게 하루의 가치를 줍니다.',
      ],
    },
    cta: {
      title: '모든 소리를, 인용 가능한 증거로.',
      subtitle: '음악학·음향학·디지털 휴머니티스 연구를 위해, 측정부터 아카이빙까지 한 번에.',
      button: '다운로드 방법 보기',
    },
    footer: {
      tagline: '소리의 측정을 기록하고, 증거를 보존하다.',
      contact: '연락처',
      license: '라이선스',
      rights: '© 2026 Jinyun SonicAI\n서남대학교 예술인류학 연구소 · 서남대학교 중국음악심리건강 연구소',
      special: '이 소프트웨어로, 음악음향학의 선구적 학자이자 국무원 특별 보조금 전문가 한보강(韩宝强) 교수께 감사와 헌사를 전합니다.',
      version: 'v0.99.20260925',
      licenseValue: '오픈소스·감사 가능 · GPL-3.0-only',
    },
    changelog: {
      eyebrow: 'CHANGELOG · 개발 로그',
      headline: 'v0.98 → v0.99, 9개 카테고리 업데이트',
      legend: '★는 이번 버전의 헤드라인(가장 먼저 보셔야 합니다); 항목당 한 줄, 숫자는 사이트 전체와 일치.',
    },
    help: {
      eyebrow: 'HELP · 도움말',
      headline: '빠른 시작: 14단계로 익히기',
      legend: '내용은 AcouScope 앱 내「도움말 → 빠른 시작」을 그대로 반영(3개 언어 각각 14개 항목, 문자 그대로 일치).',
      shortcutsTitle: '단축키 설명',
      shortcutsNote: 'macOS에서는 Ctrl이 Cmd에 해당합니다; 이 중「다시 실행(Redo)」은 macOS에서 Cmd+Shift+Z입니다.',
    },
  },
  ja: {
    meta: {
      title: 'AcouScope — 音の測定を記録し、証拠を保存する | Jinyun SonicAI',
      desc: '音楽学・音響学・デジタル・ヒューマニティーズ研究のための次世代音響分析エンジン：3つのSOTAピッチエンジン、3ペインワークスペース、ローカルAIチャート解釈、フィールドメタデータエクスポート——低スペックのデバイスでもスムーズに動作します。',
    },
    brand: { name: 'Jinyun SonicAI', en: 'Jinyun SonicAI' },
    nav: { product: '製品', features: '機能', vision: 'ビジョン', download: 'ダウンロード', changelog: '開発ログ', help: 'ヘルプ' },
    hero: {
      badge: '音の研究 · アーカイブ可能・トレーサブル · 国際および中国のアーカイブメタデータ要素を参考',
      slogan: '音の測定を記録し、証拠を保存する。',
      subtitle: 'AcouScopeは音楽学・音響学・デジタル・ヒューマニティーズ研究のための次世代音響分析エンジンです。古琴のハーモニックを研究する民族音楽学者、歌唱法のピッチを分析する声楽研究者、練習室の残響を測定するオーディオエンジニア——いずれも聴覚の直感を、計測可能・引用可能・再現可能な音響証拠に変換します。エクスポートフィールドは IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等のメタデータ要素を参考（フィールド対照確認は進行中）、カスタムマッピングに対応し、すべての録音を長期アーカイブ・トレーサブルにします。3ペインワークスペースでスペクトル・スペクトログラム・3Dビューをいつでも開け、研究の整理を一気通貫で。',
      cta1: 'ダウンロード',
      cta2: '3つのピッチエンジンを詳しく',
      version: 'v0.99.20260925',
      chip: 'SOTAディープラーニング基盤 · 単一ウィンドウ3ペインワークスペース · ローカルAI解釈',
    },
    product: {
      label: '音楽学とデジタル・ヒューマニティーズのための',
      title: 'AcouScope を知る',
      body: 'AcouScopeは音楽学・音響学・デジタル・ヒューマニティーズなど分野の研究のための専門音響分析ソフトウェアです。厳密な学術的態度で、音の測定・分析・アーカイブを一体化し、教室でのデモ、フィールド採録から論文の図や長期音源保存まで、すべてこなします。3つのSOTAピッチ検出エンジン（pYIN / SwiftF0 / RMVPE）を内蔵し、研究シーンに応じて柔軟に切替可能で、CPUだけで高効率に推論できます。デ量子化連続ピッチ技術は、微分音やグリンドなどの細かな差を忠実に再現し、AI解釈とフィールドメタデータエクスポートは IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等のメタデータ要素を参考（フィールド対照確認は進行中）、カスタムマッピングに対応し、分析図が明確で信頼でき、すべての録音が根拠を伴い長期保存可能にします。さらに9種のテーマと二言語インターフェース（簡体字中国語 / 繁体字中国語 / English）を提供し、学術研究の厳密さと日常使いの快適さを両立します。',
      spectrum: '単一ウィンドウ3ペインワークスペース · 3つのピッチエンジン',
      quick: [
        { n: '3×', l: 'ピッチエンジン' },
        { n: '9.2×', l: 'リアルタイム倍率' },
        { n: '<140MB', l: 'ピークメモリ' },
        { n: '196s', l: '30分あたり' },
      ],
    },
    pitch: {
      eyebrow: 'PITCH · ピッチエンジン',
      title: '3つのSOTAピッチ検出エンジン',
      subtitle: '研究シーンに応じて自由に切替、純CPU推論 —— ストリーミングプレビューからフィールドの低スペックデバイスまで軽やかに。',
      common: '純CPU ONNX推論 · 30分の長時間録音で約196秒の分析 · ピークメモリ < 140MB',
      engines: [
        { name: 'pYIN', role: '古典アルゴリズム · 確率化YIN', acc: '20 cent分解能', use: 'ストリーミングプレビュー、リアルタイム分析' },
        { name: 'SwiftF0', role: '深層ニューラルモデル · 単音ピッチ', acc: '90.2% HM精度 · 9.2×ハイリアルタイム', use: '9.5万パラメータの軽量モデル、低スペックデバイスに最適' },
        { name: 'RMVPE', role: '深層ニューラルモデル · 複音ボーカル', acc: '複音 / ノイズ環境でも安定', use: 'ポリフォニック音楽における安定したボーカル基音推定' },
      ],
    },
    features: {
      eyebrow: 'ACOUSTIC · コアエンジン',
      title: '科学で、音に隠された細部を取り戻す。',
      desc: 'SOTAピッチコアからプロ級3ペインワークスペースまで、すべての細部はフィールド研究と学術ライティングのために設計 —— 「見える」だけでなく「引用可能・再現可能」のために。',
      items: [
        { title: '3つのSOTAピッチエンジン', desc: 'pYIN（ストリーミング/リアルタイム、20 cent分解能）、SwiftF0（9.5万パラメータ、9.2×リアルタイム、90.2% HM精度）、RMVPE（複音・ノイズの多いボーカル抽出）をシーンに応じて自由に切替、純CPU ONNX推論。', tag: 'pYIN · SwiftF0 · RMVPE 3種' },
        { title: '単一ウィンドウ3ペインワークスペース', desc: '0.99の新UI：左の分析ナビゲーションで7ビューをワンクリック切替（解析済みは自動チェック）、中央キャンバススタック、右のインスペクターでライブ読み取り。ペイン幅・折りたたみ状態・最終ビュー —— 再起動しても作業現場がそのまま復元。', tag: 'Workspace' },
        { title: 'core / full デュアルパッケージ', desc: 'full は AI エンジンと FFmpeg を内蔵しオフラインで即使えます；core は約 1/6 のサイズで AI コンポーネントを必要時にダウンロード。同じ機能を、ネットワークとストレージに応じて選択。', tag: 'Two Packages' },
        { title: 'デ量子化連続ピッチ', desc: '放物線補間 + 期待値法で連続 Hz を出力し、微分音やグリンドなどの細かな差を忠実に記録。', tag: 'Microtone' },
        { title: 'ローカルAI学術解釈', desc: '右側で「AI 解釈」をクリックすると、サンプリングレート・基音・セントなどの数値コンテキストを端末内モデルに送り、学術的な読み解きをストリーミング生成、連続で追加質問可能 —— プライバシーは端末の外に出ず、オフラインでも利用可能。', tag: 'AI Insight' },
        { title: '国内外メタデータ要素を参考にしたエクスポート', desc: 'エクスポートフィールドは IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等のメタデータ要素を参考（フィールド対照確認は進行中）、カスタムマッピングに対応；ワンクリックでフィールドレポートをエクスポート（JSON / XML / CSV）：アーカイブ番号、プロジェクト名、伝承者、採集日時、地域、分類、技術情報 —— すべての音に根拠を持たせ、長期アーカイブ・トレーサブルにし、ジャーナルやアーカイブにそのまま提出可能。', tag: 'メタデータ要素 · カスタムマッピング' },
        { title: '極限の低スペックデバイス対応', desc: 'Python実行環境の設定不要：full パッケージは AI エンジンと FFmpeg を内蔵しインストール後すぐオフライン；core パッケージは約 1/6 のサイズでモデルを初回使用時に必要に応じてダウンロード（検証付き）した後オフラインで使えます。ベクトル化DSPとストリーミング処理により、フィールドにネットワークが無くても、古いデバイスでも30分の長時間録音をスムーズに分析。', tag: 'オフライン利用可能' },
      ],
    },
    screenshots: {
      eyebrow: 'INTERFACE · インターフェース一覧',
      title: '1画面3ペイン、音の質感を隅々まで。',
      subtitle: 'スペクトル・スペクトログラムから3Dウォーターフォールまで、いつでも開けて状態は常に保持 —— プロのDAWを扱うように音素材を整理。',
      zoom: '拡大して見る',
      close: '閉じる',
      prev: '前へ',
      next: '次へ',
      panes: [ {label:'分析ナビゲーション',desc:'7ビューをワンクリック切替、解析済みは自動チェック'}, {label:'中央キャンバススタック',desc:'スペクトル / スペクトログラム / 3Dを同画面に常駐、離れても戻ればそのまま'}, {label:'インスペクター · AI',desc:'現在のビュー / 選択範囲 / 分析ウィンドウ / 再生位置 / オーディオパラメータのライブ読み取り'} ],
      shots: [ {alt:'FFTスペクトルと楽譜注釈インターフェース（3ペインワークスペース）',label:'FFT · スペクトルと楽譜'}, {alt:'リアルタイム特徴4ペインインターフェース',label:'リアルタイム特徴 · 4ペイン監視'}, {alt:'3Dスペクトログラムインターフェース',label:'3Dスペクトログラム · ウォーターフォール'} ],
    },
    charts: {
      eyebrow: 'DATA · データとインサイト',
      title: '事実を、信頼できる証拠に描く。',
      desc: '以下のデータは研究シーン向けで、すべて検証・再現可能 —— 9大分析モジュールからクロスプラットフォームまで、テスト規模からフラッグシップの売りポイントまで。',
      c1t: '9大分析モジュール、4大能力ファミリー',
      c1s: '髪の毛一本 = 分析モジュール1つ · バブルの大きさ = そのモジュール数 · 時間領域 / 周波数領域・スペクトル / ピッチ・声質 / 空間・リアルタイム',
      c2t: '3大OS、1つの完全な能力',
      c2s: 'macOS · Windows · Linux · すべて塗りつぶし = 対応',
      c3t: '2965件の自動化テスト、再現可能な結果',
      c3s: 'algorithm · audio I/O · UI · すべての分析を検証済み',
      c4t: '研究者1人の論文のための2大フラッグシップ',
      c4s: '出版グレードの図 + AI解釈 · CSSCI / SCI に直接投稿 · gold = フラッグシップ/出版グレード',
      c5t: '信頼できる研究ツール1つ',
      c5s: 'コアアルゴリズムはすべて独自開発 · オープンソースで監査可能 · GPL-3.0-only · ピアレビューの推敲に耐える',
      fam_label: 'バブルの大きさ = 分析モジュール数　·　金 = 分析が最も多い能力ファミリー',
      fam: ['時間領域', '周波数領域・スペクトル', 'ピッチ・声質', '空間・リアルタイム'],
      engines: ['波形分析', 'FFTスペクトル', 'スペクトログラム', '3Dスペクトログラム', 'ピッチ分析', 'フォーマント分析', 'ティンバー分析', 'リアルタイム特徴', 'ルームモード分析'],
      cap: ['波形', 'FFT', 'スペクトログラム', 'ピッチ・フォーマント', '3Dスペクトル', 'リアルタイム'],
      omarchy: 'Omarchyを最初にサポート',
      mods: ['ウェーブ', 'FFT', 'スペクト', 'ピッチ', 'フォーマント', 'ティンバー', '3D', 'ライブ', 'AI'],
      testsLabel: '件の自動化テスト · pytest',
      trust: [
        { n: '9', label: '大分析モジュール', tag: 'Analysis Modules' },
        { n: '9', label: '種の学術テーマ', tag: 'Themes' },
        { n: '5', label: '種のインターフェース言語', tag: '簡体 / 繁体 / EN / 한국어 / 日本語' },
        { n: '2965', label: '件の自動化テスト', tag: 'Automated Tests' },
        { n: '5', label: '種のインストール形態', tag: 'Platforms' },
      ],
      flag: [
        { badge: 'フラッグシップ 01', title: '出版グレードの図', hook: '論文でそのまま使える図、発表会で再修正不要。', points: ['エクスポートは見た目に完全一致、SVG / PDF ベクター + PNG ビットマップから選択', '出版グレードのフォントと配色を内蔵、中国語と楽譜記号が崩れずくっきり', '解像度と図サイズをカスタマイズ、CSSCI / SCI に直接投稿', '図1つに説明1つ、図表番号と注釈はこちらが管理'], stats: [{ n: '6', l: 'エクスポート形式' }, { n: '300', l: 'DPI 調整可能' }] },
        { badge: 'フラッグシップ 02', title: 'AI解釈', hook: '学術レビュアーの視点で、あなたのスペクトルを読む。', points: ['スペクトルピーク、ハーモニック系列とフォーマント構造を自動検出し、中国語の学術文脈で説明', '論文にそのまま書ける分析段落の草稿を提供し、文章工数を半分節約', '二言語で出力切替、国際会議への投稿を自分で翻訳する必要なし', '提示できる研究提案、次にどこを見るか教えてくれる'], stats: [{ n: '複数', l: 'Provider 選択可能' }, { n: '30', l: 'AI テスト項目' }] },
      ],
      rowPrec: '精度',
      rowUse: '適用シーン',
      stdArchive: '参考にしたメタデータ要素',
      stdArchiveNote: 'フィールド対照確認は進行中（適合性の声明は行わない）',
      pitchEng: 'ピッチエンジン',
    },
    vision: {
      eyebrow: '音に伝記を立てる · スタジオのビジョン',
      title: 'Jinyun SonicAI について',
      quote: '「私たちは信じています。音には、ひとつの民族の美学とひとつの時代の記憶が宿り、優れたツールは、その証拠を見られ、引用され、継承されるようにする。」',
      bodyTop: 'Jinyun SonicAIは、西南大学音楽音響学ラボが革新的な応用の実装のために立ち上げたブランドの一つで、音楽音響学・音楽技術・デジタル・ヒューマニティーズとAI応用の交差研究に特化しています。',
      bodyBottom: 'AcouScopeは、スタジオが音楽と音の研究のために心を込めて作った分析エンジンです —— 研究・教育・創作、すべてがひとつのソフトウェアで、フィールド採集から論文出版までの全工程を完遂できます。',
      badges: ['西南大学', '音楽音響学 · デジタル・ヒューマニティーズ', 'オープンソースで監査可能 · GPL-3.0-only'],
    },
    stats: {
      engines: 'つのピッチエンジン',
      tests: '件の自動化テスト',
      realtime: '倍リアルタイム',
      themes: '種の学術テーマ',
    },
    download: {
      eyebrow: 'DOWNLOAD',
      title: 'AcouScope をダウンロード',
      subtitle: 'macOS（Apple Silicon / Intel）、Windows x64、Linux x86_64 のビルドパッケージがすべて準備完了。お使いのシステムを選んでダウンロードできます。',
      heroBtn: 'ダウンロード',
      recommend: 'おすすめ',
      allTitle: '全プラットフォームとバージョン',
      coming: '近日公開',
      note: 'GPL-3.0-only · オープンソースで監査可能 · 任意のスポンサー',
      releaseHint: 'ダウンロード後、Release ページに記載の sha256 と照合してファイルの整合性を確認できます。',
      faqHint: '初回起動で止まる場合は、ヘルプページの「問題が起きたときの対処法」をご覧ください。',
    },
    faq: {
      title: '問題が起きたときの対処法',
      items: [
        '初回起動でブロックされる（macOS）：「開けません」「開発元を確認できません」と表示されたら、アプリアイコンを右クリック（または Control+クリック）▸「開く」を選び、ダイアログでもう一度「開く」を押してください。この操作は初回の一度だけで、以降はダブルクリックで正常に開けます。Windows で SmartScreen が出たら「詳細情報」▸「実行」を選んでください。',
        'それでも開けない場合：ターミナルで1つのコマンドを実行し、AcouScope 自身の隔離属性だけを解除してください：xattr -d com.apple.quarantine "/Applications/AcouScope.app"。背景：本バージョンは意図的に Apple の公証を行っていません。macOS は公証されていないダウンロードアプリを既定で「未確認」として扱います。このコマンドはこのアプリにのみ作用し、システムのセキュリティ設定や他のアプリには影響しません。',
        'ダウンロードファイルの完全性を確認したい場合：各配布ページにインストールファイルの sha256 値を掲載します。手元で確認してください — macOS: shasum -a 256 <ファイル>、Windows PowerShell: Get-FileHash <ファイル>。両者が完全一致した場合のみインストールしてください。',
        'mp3 / m4a が開かない、または AI 解釈が使えない：core パッケージをインストールした可能性があります — core には FFmpeg とローカル AI エンジンが含まれません（再生は通常影響なく、これらの形式の分析デコードに影響します）。full パッケージへ切り替えるか、FFmpeg をご自身で導入してください。AI コンポーネントは設定から必要に応じてダウンロードできます。',
        'ダウンロードが遅い／失敗する／その他：回線を変えて再試行、それでも解決しなければ sfklc@hotmail.com へメール、または公式 WeChat グループ（アプリ内ツールバー「公式 WeChat グループに参加」に QR コード）へ。報告の際は：どの操作中か、何を期待したか、実際に見えたもの——スクリーンショットがあると尚可。その一文が、私たちの一日分の価値になります。',
      ],
    },
    cta: {
      title: 'すべての音を、引用可能な証拠に。',
      subtitle: '音楽学・音響学・デジタル・ヒューマニティーズ研究のために、測定からアーカイブまで一気通貫。',
      button: 'ダウンロード方法を見る',
    },
    footer: {
      tagline: '音の測定を記録し、証拠を保存する。',
      contact: '連絡先',
      license: 'ライセンス',
      rights: '© 2026 Jinyun SonicAI\n西南大学芸術人類学研究所 · 西南大学中国音楽メンタルヘルス研究所',
      special: 'このソフトウェアをもって、音楽音響学の先駆的学者であり国務院特別手当の専門家である 韓宝強（ハン・バオチャン）教授に、感謝と献辞を捧げます。',
      version: 'v0.99.20260925',
      licenseValue: 'オープンソース・監査可能 · GPL-3.0-only',
    },
    changelog: {
      eyebrow: 'CHANGELOG · 開発ログ',
      headline: 'v0.98 → v0.99、9カテゴリの更新',
      legend: '★ は本リリースの見出し項目（まずここを見るべき）；各1行、数字はサイト全体と一致。',
    },
    help: {
      eyebrow: 'HELP · ヘルプ',
      headline: 'クイックスタート：14ステップで始める',
      legend: '内容は AcouScope アプリ内の「ヘルプ → クイックスタート」をそのままミラー（3言語それぞれ14項目、一字一句一致）。',
      shortcutsTitle: 'ショートカットキー説明',
      shortcutsNote: 'macOS では Ctrl が Cmd に対応します；そのうち「やり直し（Redo）」は macOS で Cmd+Shift+Z です。',
    },
  },
}

export type Dict = typeof dict.sc

interface I18nCtx {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const Ctx = createContext<I18nCtx | null>(null)

// 依据浏览器语言/区域嗅探初始语言：中文（简/繁）、英文、韩文、日文；其它语言回退英文
function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'sc'
  const lan = (navigator.language || 'en').toLowerCase()
  const region = (navigator.languages?.[0] || lan)
  if (/zh-(hant|hk|mo|tw)/.test(region) || /zh_/i.test(region)) {
    if (/hant|hk|mo|tw/.test(region)) return 'tc'
    return 'sc'
  }
  if (/^zh/.test(lan)) {
    return /hant|hk|mo|tw/.test(region) ? 'tc' : 'sc'
  }
  if (/^ko/.test(lan)) return 'ko'
  if (/^ja/.test(lan)) return 'ja'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const global = dict[locale]

  useEffect(() => {
    document.title = global.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', global.meta.desc)
  }, [global])

  const value: I18nCtx = { locale, setLocale, t: global }

  return (
    <Ctx.Provider value={value}>
      <div data-locale={locale} lang={LOCALES.find((l) => l.code === locale)?.lang}>
        {children}
      </div>
    </Ctx.Provider>
  )
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
