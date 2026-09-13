import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { PALETTE, useInView } from './chartCore'

// C3 · 2148 项自动化测试（Draw-in + Counter，纯 SVG）—— 文案走 i18n
export default function TestsCounter() {
  const { t } = useI18n()
  const c = t.charts
  const MODS = c.mods // 9 模块名
  const TOTAL = 2148 // 实测 collect 总数
  const vals = Array.from({ length: 9 }, () => TOTAL / 9) // 分模块数值为示意、非对外主张（页面只显示总数）
  const W = 460, H = 260
  const PAD = { l: 20, r: 20, t: 66, b: 30 }
  const INNER_W = W - PAD.l - PAD.r
  const INNER_H = H - PAD.t - PAD.b

  const { ref, shown } = useInView<HTMLDivElement>(0.3)
  const [p, setP] = useState(0)

  useEffect(() => {
    if (!shown) return
    let raf = 0
    const t0 = performance.now()
    const DUR = 2200
    const tick = (now: number) => {
      const tt = Math.min(1, (now - t0) / DUR)
      setP(1 - Math.pow(1 - tt, 3))
      if (tt < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shown])

  const cum: number[] = []
  vals.reduce((a, b, i) => (cum[i] = a + b, cum[i]), 0)
  const x = (i: number) => PAD.l + (i / (MODS.length - 1)) * INNER_W
  const y = (v: number) => PAD.t + INNER_H * (1 - v / (TOTAL * 1.06))
  const pts = MODS.map((_, i) => `${x(i).toFixed(1)},${y(cum[i]).toFixed(1)}`).join(' ')
  const shownVal = Math.round(TOTAL * p)

  return (
    <div ref={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={c.c3t}>
        <text x={PAD.l} y={PAD.t - 18} fontSize={36} fontWeight={800} fill={PALETTE.hero}>{shownVal}</text>
        <text x={PAD.l} y={PAD.t - 2} fontSize={10} fontWeight={600} fill={PALETTE.mut}>{c.testsLabel}</text>
        <polygon points={`${PAD.l},${H - PAD.b} ${pts} ${W - PAD.r},${H - PAD.b}`} fill="rgba(46,155,255,.14)" />
        <polyline points={pts} fill="none" stroke={PALETTE.data2} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="chart-draw" style={{ strokeDasharray: 1, strokeDashoffset: 1 - p }} />
        {MODS.map((m, i) => <text key={m} x={x(i)} y={H - PAD.b + 16} fontSize={8} fontWeight={600} fill={PALETTE.faint} textAnchor="middle" style={{ width: 44, overflow: 'hidden', whiteSpace: 'nowrap' }}>{m}</text>)}
      </svg>
    </div>
  )
}
