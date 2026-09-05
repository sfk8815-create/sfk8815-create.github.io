// 平滑滚动到指定 section（避免与 HashRouter 的 # 路由冲突）
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
