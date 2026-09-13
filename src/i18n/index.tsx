import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Locale = 'sc' | 'tc' | 'en'

export const LOCALES: { code: Locale; label: string; lang: string }[] = [
  { code: 'sc', label: '简体中文', lang: 'zh-CN' },
  { code: 'tc', label: '繁體中文', lang: 'zh-TW' },
  { code: 'en', label: 'English', lang: 'en' },
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
      cta1: '即将发布',
      cta2: '了解三套音高引擎',
      version: 'v0.99.20260904',
      chip: 'SOTA 深度学习底座 · 单窗口三栏工作台 · 本地 AI 释图',
    },
    product: {
      label: '面向音乐与数字人文领域',
      title: '认识 AcouScope · 音析',
      body: 'AcouScope 是面向音乐学、声学与数字人文等领域研究的专业声学分析软件，以严谨的学术态度，将声音的测量、分析与档案化融为一体——从课堂演示、田野采录，到论文配图与长期音档保存，皆能胜任。软件内置三套 SOTA 音高检测引擎（pYIN / SwiftF0 / RMVPE），可按研究场景灵活切换，仅凭 CPU 即可高效推理；其反量化连续音高技术，能够忠实还原微分音与滑音等细微差别；AI 释图与田野元数据导出，字段参考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元数据要素（字段对照核对中），支持自定义映射，使分析图表清晰可信，让每段录音皆有据可查、可长期典藏。软件另提供 9 套主题与双语界面（简体中文 / 繁體中文 / English），兼顾学术研究的严谨与日常使用的舒适。',
      spectrum: '单窗口三栏工作台 · 三套音高引擎',
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
          desc: '免于 Python 运行环境配置、首次使用自动下载模型，此后可离线、内置 FFmpeg、向量化 DSP 与流式处理——田野无网、设备老旧，也能顺畅分析 30 分钟长录音。',
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
      c3t: '2148 项自动化测试，让结果可复现',
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
        { n: '3', label: '种界面语言', tag: '简体 / 繁體 / EN' },
        { n: '2148', label: '项自动化测试', tag: 'Automated Tests' },
        { n: '5', label: '类安装形态', tag: 'Platforms' },
      ],
      flag: [
        { badge: '旗舰 01', title: '出版级出图', hook: '论文里能直接用的图，答辩不用再修。', points: ['导出与所见完全一致，SVG / PDF 矢量 + PNG 位图任选', '内置出版级字体与配色，中文与乐理符号不乱不糊', '自定义分辨率与图尺寸，直投 CSSCI / SCI', '一张图配一份说明，图表编号与注释由它来管'], stats: [{ n: '6', l: '导出格式' }, { n: '300', l: 'DPI 可调' }] },
        { badge: '旗舰 02', title: 'AI 释图', hook: '它以学术审稿人的视角，帮你读频谱。', points: ['自动识别谱峰、泛音序列与共振峰结构，中文学术语境解释', '给出可直接写进论文的分析段落草稿，省一半文字工时', '双语切换输出，国际会议投稿不用自己翻', '可提示的研究建议，下一步看哪里它会提醒'], stats: [{ n: '多', l: 'Provider 可选' }, { n: '30', l: 'AI 测试项' }] },
      ],
      rowPrec: '精度',
      rowUse: '适用场景',
      stdArchive: '参考的元数据要素',
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
      subtitle: 'macOS 原生首发（arm64 / x86_64），其余平台构建包同步就绪。',
      heroBtn: '即将发布',
      recommend: '为您推荐',
      allTitle: '全部平台与版本',
      coming: '即将发布',
      note: 'GPL-3.0-only · 开源可审计 · 按需赞助',
      releaseHint: '下载地址将在正式发布时提供。',
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
      version: 'v0.99.20260904',
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
      cta1: '即將發布',
      cta2: '了解三套音高引擎',
      version: 'v0.99.20260904',
      chip: 'SOTA 深度學習底座 · 單視窗三欄工作台 · 本地 AI 釋圖',
    },
    product: {
      label: '面向音樂與數位人文領域',
      title: '認識 AcouScope · 音析',
      body: 'AcouScope 是面向音樂學、聲學與數位人文等領域研究的專業聲學分析軟體，以嚴謹的學術態度，將聲音的測量、分析與檔案化融為一體——從課堂示範、田野採錄，到論文配圖與長期音檔保存，皆能勝任。軟體內建三套 SOTA 音高檢測引擎（pYIN / SwiftF0 / RMVPE），可按研究場景靈活切換，僅憑 CPU 即可高效推理；其反量化連續音高技術，能夠忠實還原微分音與滑音等細微差別；AI 釋圖與田野元資料匯出，字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元資料要素（字段對照核對中），支援自訂映射，使分析圖表清晰可信，讓每段錄音皆有據可查、可長期典藏。軟體另提供 9 套主題與雙語介面（簡體中文 / 繁體中文 / English），兼顧學術研究的嚴謹與日常使用的舒適。',
      spectrum: '單視窗三欄工作台 · 三套音高引擎',
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
        { title: '反量化連續音高', desc: '拋物線內插 + 期望值法輸出連續 Hz，忠實記錄微分音與滑音等細微差別。', tag: 'Microtone' },
        { title: '本地 AI 學術釋圖', desc: '右側一點「AI 釋圖」，連同取樣率、基頻、音分等數值上下文送入端側模型，串流生成學術釋讀，可連續追問——隱私不出機器，無網也能用。', tag: 'AI Insight' },
        { title: '參考國內外元資料要素的匯出', desc: '匯出字段參考 IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 等元資料要素（字段對照核對中），支援自訂映射；一鍵匯出田野報告（JSON / XML / CSV）：檔案編號、專案名稱、傳承人、採集時間、地區、類別、技術資訊——讓每段聲音都有據可查、可長期儲存、可溯源，直接提交期刊與檔案館。', tag: '元資料要素 · 自訂映射' },
        { title: '極限弱設備適配', desc: '免於 Python 執行環境設定、首次使用自動下載模型，此後可離線、內建 FFmpeg、向量化 DSP 與串流處理——田野無網、設備老舊，也能順暢分析 30 分鐘長錄音。', tag: '離線可用' },
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
      c3t: '2148 項自動化測試，讓結果可複現',
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
      trust: [ {n:'9',label:'大分析模組',tag:'Analysis Modules'}, {n:'9',label:'套學術主題',tag:'Themes'}, {n:'3',label:'種介面語言',tag:'簡體 / 繁體 / EN'}, {n:'2148',label:'項自動化測試',tag:'Automated Tests'}, {n:'5',label:'類安裝形態',tag:'Platforms'} ],
      flag: [
        { badge: '旗艦 01', title: '出版級出圖', hook: '論文裡能直接用的圖，答辯不用再修。', points: ['匯出與所見完全一致，SVG / PDF 向量 + PNG 點陣任選', '內建出版級字體與配色，中文與樂理符號不亂不糊', '自訂解析度與圖尺寸，直投 CSSCI / SCI', '一張圖配一份說明，圖表編號與註釋由它來管'], stats: [{ n: '6', l: '匯出格式' }, { n: '300', l: 'DPI 可調' }] },
        { badge: '旗艦 02', title: 'AI 釋圖', hook: '它以學術審稿人的視角，幫你讀頻譜。', points: ['自動辨識譜峰、泛音序列與共振峰結構，中文學術語境解釋', '給出可直接寫進論文的分析段落草稿，省一半文字工時', '雙語切換輸出，國際會議投稿不用自己翻', '可提示的研究建議，下一步看哪裡它會提醒'], stats: [{ n: '多', l: 'Provider 可選' }, { n: '30', l: 'AI 測試項' }] },
      ],
      rowPrec: '精度',
      rowUse: '適用場景',
      stdArchive: '參考的元資料要素',
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
      subtitle: 'macOS 原生首發（arm64 / x86_64），其餘平台構建包同步就緒。',
      heroBtn: '即將發布',
      recommend: '為您推薦',
      allTitle: '全部平台與版本',
      coming: '即將發布',
      note: 'GPL-3.0-only · 開源可審計 · 按需贊助',
      releaseHint: '下載位址將在正式發布時提供。',
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
      version: 'v0.99.20260904',
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
      cta1: 'Coming soon',
      cta2: 'Explore three pitch engines',
      version: 'v0.99.20260904',
      chip: 'SOTA deep-learning core · single-window three-pane workspace · local AI interpretation',
    },
    product: {
      label: 'FOR MUSICOLOGY & DIGITAL HUMANITIES',
      title: 'Meet AcouScope',
      body: 'AcouScope is a professional acoustic analysis application for research across musicology, acoustics and the digital humanities. With a rigorous, scholarly approach, it unites the measurement, analysis and archiving of sound — from classroom demonstration and fieldwork capture to publication figures and long-term audio preservation. Three SOTA pitch-detection engines (pYIN / SwiftF0 / RMVPE) switch flexibly by research scenario and run efficiently on CPU alone; its de-quantized continuous-pitch technology faithfully preserves the subtle nuances of microtones and glides; AI interpretation and field-metadata export reference metadata elements from IASA-TC 04 / IMDI / GB/T 31219.4 / DA/T 63 (field-by-field mapping under review), with custom mapping supported, making analysis figures clear and trustworthy and every recording traceable and durably storable. Nine themes and a bilingual interface (Simplified & Traditional Chinese / English) balance scholarly rigor with everyday comfort.',
      spectrum: 'Single-window three-pane workspace · three pitch engines',
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
          desc: 'No Python environment setup required, models are downloaded automatically on first use and can then run offline, bundled FFmpeg, vectorized DSP and streaming — analyze a 30-minute recording offline on old hardware.',
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
      c3t: '2148 automated tests, reproducible results',
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
        { n: '3', label: 'interface languages', tag: '简体 / 繁體 / EN' },
        { n: '2148', label: 'automated tests', tag: 'Automated Tests' },
        { n: '5', label: 'install types', tag: 'Platforms' },
      ],
      flag: [
        { badge: 'FLAGSHIP 01', title: 'Publication-grade figures', hook: 'Figures ready for your paper, no further fixes at your defense.', points: ['WYSIWYG export — SVG / PDF vector + PNG bitmap', 'Publication-grade fonts & palettes, CJK and notation stay crisp', 'Custom resolution & size, target CSSCI / SCI', 'One figure with a caption; numbering & notes handled'], stats: [{ n: '6', l: 'Formats' }, { n: '300', l: 'DPI' }] },
        { badge: 'FLAGSHIP 02', title: 'AI interpretation', hook: 'It reads your spectrum like an academic reviewer.', points: ['Auto-detects spectral peaks, harmonic series and formants, explained in scholarly terms', 'Drafts analysis paragraphs you can drop into your paper', 'Switches language for international submissions', 'Suggests what to examine next'], stats: [{ n: 'Multi', l: 'Providers' }, { n: '30', l: 'AI tests' }] },
      ],
      rowPrec: 'Accuracy',
      rowUse: 'Use case',
      stdArchive: 'Referenced metadata elements',
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
      subtitle: 'Native macOS release (arm64 / x86_64); other platform builds ready in parallel.',
      heroBtn: 'Coming soon',
      recommend: 'Recommended for you',
      allTitle: 'All platforms & builds',
      coming: 'Coming soon',
      note: 'GPL-3.0-only · open-source & auditable · optional sponsorship',
      releaseHint: 'Download links will be provided at the official release.',
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
      version: 'v0.99.20260904',
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
}

export type Dict = typeof dict.sc

interface I18nCtx {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const Ctx = createContext<I18nCtx | null>(null)

// 依据浏览器语言/区域嗅探初始语言：中文（简/繁）、英文；其它语言回退英文
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
