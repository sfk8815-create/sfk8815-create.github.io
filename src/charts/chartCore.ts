// 品牌 custom 色板（lieflat-charts · 六点五 custom 规则）
// 同一交付只用这一套：蓝梯 + 唯一金色 HERO，不与其他预设混用。
// 对比度：文字 #F0EFEB 于深蓝 ≈ 15.9:1；金 #E8C97A 于深蓝 ≈ 10.9:1，均达标。
import { useEffect, useRef, useState } from 'react'

export const PALETTE = {
  bg: '#0E1830',               // 卡片底（深蓝，贴合暗站）
  ink: '#111A2E',
  txt: '#F0EFEB',              // 主体文字
  mut: 'rgba(240,239,235,.62)',
  faint: 'rgba(240,239,235,.34)',
  grid: 'rgba(240,239,235,.16)',
  data: '#116AA3',
  data2: '#2E9BFF',
  data3: '#7C5CFF',
  hero: '#E8C97A',             // 学术金 · 单一主角
  cardBg: 'linear-gradient(180deg, rgba(46,155,255,.06), transparent)',
  cardBorder: 'rgba(240,239,235,.16)',
}

/** 进入视口触发一次（用于 reveal 动画） */
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, shown }
}
