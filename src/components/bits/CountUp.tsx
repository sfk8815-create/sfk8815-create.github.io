import { useEffect, useRef, useState } from 'react'

/**
 * CountUp —— 数字滚动增效组件（用于数据指标带）
 * 进入视口后从 0 递增到目标值，配合 easeOut 缓动。
 */
export default function CountUp({
  end,
  duration = 1600,
  suffix = '',
  className = '',
}: {
  end: number
  duration?: number
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            const decimals = Number.isInteger(end) ? 0 : 1
            const next = end * eased
            setVal(decimals === 0 ? Math.round(next) : Number(next.toFixed(decimals)))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  )
}
