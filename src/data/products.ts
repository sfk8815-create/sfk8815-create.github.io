// 产品子页面数据（sovena / omarchy-academic / mcp-cockpit）
// 内容来自各仓库 README，分语块 sc / en / ko / ja（tc 无独立块，经 getLocaleContent 回退 sc——既有行为）。
import type { Locale } from '../i18n'

interface ProductLang {
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

export interface ProductNews {
  slug: string
  name: string        // 产品/品牌名（英文/主）
  zhName: string      // 中文名
  github: string
  accent: string      // 主打强调色（数据语义唯一主角）
  sc: ProductLang
  en: ProductLang
  ko: ProductLang
  ja: ProductLang
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
    ko: {
      category: '문헌 플로우 · MCP',
      tagline: 'Zotero 문헌을 AI가 인용할 수 있는 의미 저장소로.',
      desc: 'Zotero → Markdown 의미 문헌 팩 → 벡터 검색. 각 학문 분야 학술 연구를 위한 로컬 문헌 플로우 처리 시스템이며, MCP 서비스로 모든 로컬 / 원격 AI 클라이언트에 노출됩니다 —— 인용은 정확히 “페이지”까지 추적 가능합니다.',
      highlights: [
        { title: 'Zotero 심도 접속', desc: '컬렉션 / 항목 / 주석 읽기(로컬 API, Web API key 불필요), Zotero 플러그인 포함.' },
        { title: '문헌 전문 변환', desc: '첨부 파일을 AI 친화적 Markdown으로 일괄 변환, 【책 페이지 번호】 표기를 포함해 인용을 추적할 수 있습니다.' },
        { title: '스캔 문서 OCR', desc: 'Unlimited-OCR 구조화 인식, MLX / GGUF 이중 백엔드, 원격 사용 가능.' },
        { title: '벡터 의미 검색', desc: 'LanceDB + OpenAI 호환 임의의 embedding(로컬 또는 원격 상용 플랫폼).' },
        { title: '증분 처리', desc: '항목 version + 첨부 파일 지문 이중 감지로, 신규 / 변경된 내용만 처리합니다.' },
        { title: 'AI 심도 독해 외뇌', desc: 'Claude / Cherry Studio / Trae 등이 MCP를 통해 문헌 라이브러리를 직접 조회하며, 답변은 출처를 함께 제공합니다.' },
      ],
      featureTitle: '완전한 문헌 워크플로 한 세트로',
      featureDesc: 'Zotero 수집 → 전문 변환 → OCR → 벡터화 → 의미 검색, AI 클라이언트 통합 접속까지.',
      moreTitle: '아키텍처와 생태계',
      moreDesc: 'L1 텍스트 경로(pymupdf) / L2 OCR 경로(MLX·GGUF) / 임의 문서(anydoc)가 LanceDB 벡터 저장소로 모이고, Web 콘솔(:8765)과 MCP 엔드포인트(/mcp)로 출력됩니다.',
      cta: 'GitHub로 이동',
    },
    ja: {
      category: '文献フロー · MCP',
      tagline: 'Zotero の文書を、AI が引用できるセマンティックコーパスに。',
      desc: 'Zotero → Markdown セマンティック文書パック → ベクトル検索。各学問分野の学術研究のためのローカル文献フロー処理システムで、MCP サービスとして任意のローカル / リモート AI クライアントに公開 —— 引用は正確に“ページ”まで遡れます。',
      highlights: [
        { title: 'Zotero 深掘り連携', desc: 'コレクション / アイテム / アノテーションの読み取り（ローカル API、Web API key 不要）、Zotero プラグイン付き。' },
        { title: '文書全文変換', desc: '添付ファイルを AI 向け Markdown に一括変換、【ページ番号】注記付きで引用を遡れます。' },
        { title: 'スキャン文書 OCR', desc: 'Unlimited-OCR による構造化認識、MLX / GGUF の2バックエンド、リモート対応。' },
        { title: 'ベクトルセマンティック検索', desc: 'LanceDB + 任意の OpenAI 互換 embedding（ローカルまたは商用リモート）。' },
        { title: '増分処理', desc: 'アイテム version + 添付ファイル指紋の二重検出で、新規 / 変更分のみ処理。' },
        { title: 'AI 精読の外脳', desc: 'Claude / Cherry Studio / Trae が MCP 経由でライブラリを直接照会し、出典付きの回答を。' },
      ],
      featureTitle: '完全な文献ワークフローを1セットで',
      featureDesc: 'Zotero 収集 → 全文変換 → OCR → ベクトル化 → セマンティック検索、AI クライアントへの統一接続まで。',
      moreTitle: 'アーキテクチャとエコシステム',
      moreDesc: 'L1 テキスト経路(pymupdf) / L2 OCR 経路(MLX·GGUF) / 任意ドキュメント(anydoc)を LanceDB ベクトルストアに集約し、Web コンソール(:8765)と MCP エンドポイント(/mcp)から出力。',
      cta: 'GitHub で見る',
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
    ko: {
      category: '운영체제 · 학술 에디션',
      tagline: '중국 학술 연구와 학술 시나리오를 위해 만든 Omarchy.',
      desc: 'Omarchy 4.0.1(Arch Linux + Hyprland + Quickshell) 기반의 중국어 학술 에디션 구성: 중국어 환경 + 학술 소프트웨어 스택, 박스 오픈 즉시 사용, 원클릭 설치, 장기 유지보수.',
      highlights: [
        { title: '중국 시스템 로케일', desc: 'zh_CN.UTF-8 + 중국 시간대, 박스 오픈 즉시 중국어.' },
        { title: 'fcitx5 + Rime 입력법', desc: '무송 병음 rime-ice, 쌍병음 등 스킴 포함, `` `` 페이지 넘김.' },
        { title: '중국어 폰트 폴백', desc: '라틴 폰트 글리프 누락 시 자동으로 Noto Sans CJK로 폴백, 4개 터미널에서 중국어 렌더링.' },
        { title: '학술 소프트웨어 스택', desc: 'Zotero, Obsidian, Zettlr, Xournal++, LibreOffice/WPS, Tesseract 중국어 OCR, Pandoc, TeX Live.' },
        { title: '기본 통합 sovena + MCP Cockpit', desc: '문헌 플로우 + MCP 통합 게이트웨이, 완전한 학술 워크플로를 구성합니다.' },
        { title: '모듈화 · 장기 유지보수 가능', desc: '원클릭 설치 / 제거, sync.sh 양방향 동기화 + GitHub Actions CI.' },
      ],
      featureTitle: '중국어도, 학술도, 박스 오픈 즉시 사용',
      featureDesc: '학술계를 위해, Omarchy를 손에 익는 중국어 연구 워크스테이션으로.',
      moreTitle: 'Omarchy와의 관계',
      moreDesc: '이 저장소는 Omarchy 위의 “증분 오버레이”로, 필요한 파일만 설치/수정하며 Omarchy 자체 업그레이드를 존중합니다; 비공식 프로젝트이며 omarchy refresh 로 언제든 복원할 수 있습니다. 개발자 지향 OmarchyCN 과 중첩 공존할 수 있습니다.',
      cta: 'GitHub로 이동',
    },
    ja: {
      category: 'OS · アカデミックエディション',
      tagline: '中国の学術研究とアカデミックシーンのために作られた Omarchy。',
      desc: 'Omarchy 4.0.1（Arch Linux + Hyprland + Quickshell）ベースの中国語アカデミックエディション構成：中国語環境 + 学術ソフトウェアスタック、開封そのまま利用、ワンクリックインストール、長期メンテナンス。',
      highlights: [
        { title: '中国語システムロケール', desc: 'zh_CN.UTF-8 + 中国タイムゾーン、開封そのまま中国語。' },
        { title: 'fcitx5 + Rime 入力メソッド', desc: '霧氷ピンイン rime-ice、ダブルピンインなどのスキームを含む、`` `` でページ送り。' },
        { title: '中国語フォントフォールバック', desc: 'ラテンフォントの欠字は自動的に Noto Sans CJK にフォールバック、4つのターミナルで中国語をレンダリング。' },
        { title: '学術ソフトウェアスタック', desc: 'Zotero, Obsidian, Zettlr, Xournal++, LibreOffice/WPS, Tesseract 中国語 OCR, Pandoc, TeX Live.' },
        { title: 'sovena + MCP Cockpit デフォルト統合', desc: '文献フロー + MCP 統一ゲートウェイで、完全な学術ワークフローを構成。' },
        { title: 'モジュール化 · 長期メンテナンス可能', desc: 'ワンクリックインストール / 削除、sync.sh 双方向同期 + GitHub Actions CI。' },
      ],
      featureTitle: '中国語も学術も、開封そのまま使える。',
      featureDesc: '学術界のために、Omarchy を使い勝手の良い中国語研究ワークステーションに変える。',
      moreTitle: 'Omarchy との関係',
      moreDesc: '本リポジトリは Omarchy 上の“増分オーバーレイ”で、必要なファイルのみをインストール/変更し、Omarchy 自身のアップグレードを尊重；非公式プロジェクトであり、`omarchy refresh` でいつでも復元可能。開発者向けの OmarchyCN と重ねて共存できます。',
      cta: 'GitHub で見る',
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
    ko: {
      category: 'MCP · 게이트웨이 관리 대시보드',
      tagline: 'MCP 설정 하나, 모든 AI 클라이언트에 서비스.',
      desc: 'mcp-hub 게이트웨이의 제로 의존 Web 관리 대시보드 + 자동 복구 워치독. 모든 MCP 서버를 집중적으로 추가/삭제/새로고침/테스트; 클라이언트는 하나의 통합 엔드포인트에만 연결 —— 보일 수 있고, 관리할 수 있고, 자가 치유됩니다.',
      highlights: [
        { title: '설정 하나, 모든 단말 공유', desc: '모든 클라이언트가 동일한 통합 엔드포인트에 연결; 새 서버 추가는 한 곳에서만 하면 유효합니다.' },
        { title: '시각적 관리, API 지식 제로', desc: '추가 / 삭제 / 새로고침 원클릭 조작, 설정 파일을 편집할 필요 없음.' },
        { title: '원클릭 호출 테스트', desc: '파라미터, 환경 변수, 타임아웃을 페이지에서 직접 입력, 결과를 현장에서 확인.' },
        { title: '자가 치유 워치독', desc: '지속적 오프라인 시 게이트웨이를 자동 재시작, 디바운스 / 쿨다운 / 상한으로 폭주 방지.' },
        { title: '설정 백업 / 복원', desc: '원클릭 내보내기, 단일 파일로 복원, 설정을 깨뜨릴 걱정은 끝.' },
        { title: '로컬 우선, 제로 의존', desc: '127.0.0.1만 경청, 데이터는 로컬을 떠나지 않음; package.json 없음, Node 직접 실행.' },
      ],
      featureTitle: 'MCP 게이트웨이를 보일 수 있고, 관리할 수 있고, 자가 치유되게',
      featureDesc: 'mcp-hub 게이트웨이를 하나의 통합 엔드포인트 + 브라우저 코크핏 하나로 수렴.',
      moreTitle: '제로 의존 · 단일 파일',
      moreDesc: 'Node 파일 하나(server.js) + HTML 페이지 하나(index.html), package.json 없음, 어떤 의존성도 설치할 필요 없음; 자동 복구 엔진은 디바운스와 쿨다운을 내장합니다.',
      cta: 'GitHub로 이동',
    },
    ja: {
      category: 'MCP · ゲートウェイ管理コンソール',
      tagline: 'MCP 設定は1つで、すべての AI クライアントに。',
      desc: 'mcp-hub ゲートウェイのゼロ依存 Web 管理コンソール + 自動回復ウォッチドッグ。すべての MCP サーバーを一括で追加 / 削除 / 更新 / テスト；クライアントは1つの統一エンドポイントにだけ接続 —— 見える、管理できる、自己修復する。',
      highlights: [
        { title: '設定1つ、全クライアント共有', desc: 'すべてのクライアントが同じ統一エンドポイントに接続；サーバー追加は1箇所ですべてに反映。' },
        { title: 'ビジュアル管理、API 知識ゼロ', desc: '追加 / 削除 / 更新をワンクリック、設定ファイルの編集不要。' },
        { title: 'ワンクリック呼び出しテスト', desc: '引数 / 環境変数 / タイムアウトをページ内で直接入力、その場で結果を確認。' },
        { title: '自己修復ウォッチドッグ', desc: '継続的な切断でゲートウェイを自動再起動、デバウンス / クールダウン / 上限で暴走防止。' },
        { title: '設定のバックアップ / 復元', desc: 'ワンクリックエクスポート、単一ファイルで復元、設定を壊す怖さとはおさらば。' },
        { title: 'ローカルファースト、ゼロ依存', desc: '127.0.0.1 のみバインド、データはローカルを離れない；package.json なし、Node でそのまま実行。' },
      ],
      featureTitle: 'MCP ゲートウェイを、見える・管理できる・自己修復するに。',
      featureDesc: 'mcp-hub ゲートウェイを1つの統一エンドポイント + ブラウザのコックピットに収束。',
      moreTitle: 'ゼロ依存 · 単一ファイル',
      moreDesc: 'Node ファイル1つ（server.js）+ HTML ページ1つ（index.html）、package.json なし、依存のインストール不要；自動回復エンジンはデバウンスとクールダウンを内蔵。',
      cta: 'GitHub で見る',
    },
  },
]

export function getProduct(slug: string) {
  return OTHER_PRODUCTS.find((p) => p.slug === slug)
}

export function getLocaleContent(p: ProductNews, locale: Locale) {
  if (locale === 'en') return p.en
  if (locale === 'ko') return p.ko
  if (locale === 'ja') return p.ja
  return p.sc // tc 回退 sc（既有行为，本批不改）
}
