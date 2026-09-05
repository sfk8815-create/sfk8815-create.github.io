// 跨平台 · 三大操作系统 → 子平台
// 说明：包名与最低系统为技术规格，跨语言保持统一（专业术语）。
// 下载地址暂不公开（即将震撼发布），正式发布时在 SubPlatform.url 填入各平台真实 Release 链接。

export type OSKey = 'macos' | 'windows' | 'linux'

export interface SubPlatform {
  name: string
  pkg: string
  min: string
  url: string
}

export interface PlatformGroup {
  key: OSKey
  os: string
  mark: string
  subs: SubPlatform[]
}

export const PLATFORMS: PlatformGroup[] = [
  {
    key: 'macos',
    os: 'macOS',
    mark: 'Ａ',
    subs: [
      { name: 'Apple Silicon (M 系列)', pkg: 'DMG · arm64', min: 'macOS 12+', url: '' },
      { name: 'Intel', pkg: 'DMG · x86_64', min: 'macOS 12+', url: '' },
    ],
  },
  {
    key: 'windows',
    os: 'Windows',
    mark: 'Ｗ',
    subs: [
      { name: 'Windows 10 / 11 · x86_64', pkg: 'EXE 安装程序 · x64', min: 'Win10 / 11 64 位', url: '' },
      { name: 'Windows · arm64', pkg: 'EXE 安装程序 · arm64', min: 'Win11 ARM64', url: '' },
    ],
  },
  {
    key: 'linux',
    os: 'Linux',
    mark: 'Ｌ',
    subs: [
      { name: 'Ubuntu', pkg: 'AppImage / DEB', min: 'Ubuntu 22.04 LTS+', url: '' },
      { name: 'Arch / Omarchy', pkg: 'PACMAN 原生包', min: 'Arch 滚动版', url: '' },
    ],
  },
]

export const OS_LABEL: Record<OSKey, string> = {
  macos: 'macOS',
  windows: 'Windows',
  linux: 'Linux',
}

/** 根据浏览器 UA / 平台探测用户操作系统 */
export function detectOS(): OSKey | null {
  if (typeof navigator === 'undefined') return null
  const ua = navigator.userAgent.toLowerCase()
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() || ''
  if (/mac os x|macintosh|darwin/.test(ua) || platform.includes('mac')) return 'macos'
  if (/windows|win32|win64/.test(ua) || platform.includes('win')) return 'windows'
  if (/linux|x11|ubuntu|arch|fedora|debian/.test(ua) || platform.includes('linux')) return 'linux'
  return null
}
