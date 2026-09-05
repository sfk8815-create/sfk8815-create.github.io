import { useI18n } from '../i18n'
import { PALETTE } from './chartCore'

// C2 · 三大操作系统，一套完整能力（Arc Matrix，手写 SVG）—— 文案走 i18n
export default function CrossPlatform() {
  const { t } = useI18n()
  const c = t.charts
  const PLAT = ['macOS', 'Windows', 'Linux']
  const CAP = c.cap
  const M = PLAT.map(() => CAP.map(() => 1))

  const rowY = (i: number) => 70 + i * 62
  const colX = (j: number) => 120 + j * 44
  const dy = (j: number) => -14 * Math.sin((Math.PI * j) / (CAP.length - 1 || 1))
  const W = 430, H = 320

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={c.c2t}>
      {PLAT.map((p, i) => <text key={p} x={112} y={rowY(i) + 3} fontSize={9} fontWeight={600} fill={PALETTE.mut} textAnchor="end" className="chart-fade" style={{ animationDelay: `${i * 0.08}s` }}>{p}</text>)}
      {CAP.map((c2, j) => <text key={c2} x={colX(j)} y={30} fontSize={7} fontWeight={600} fill={PALETTE.faint} textAnchor="middle" className="chart-fade" style={{ animationDelay: `${j * 0.03}s` }}>{c2}</text>)}
      {PLAT.map((_, i) => <path key={'horizon' + i} d={'M' + CAP.map((_, j) => `${colX(j)} ${rowY(i) + dy(j)}`).join(' L ')} fill="none" stroke="rgba(240,239,235,.10)" strokeWidth={1} pathLength={1} className="chart-draw" style={{ animationDelay: `${i * 0.08}s` }} />)}
      {PLAT.map((_, i) => CAP.map((_, j) => (
        <circle key={`${i}-${j}`} cx={colX(j)} cy={rowY(i) + dy(j)} r={Math.sqrt(M[i][j]) * 5.2} fill={PALETTE.data} className="chart-pop" style={{ animationDelay: `${0.2 + i * 0.08 + j * 0.02}s` }} />
      )))}
      <text x={215} y={298} fontSize={8} fontWeight={800} fill={PALETTE.hero} textAnchor="middle" className="chart-fade" style={{ animationDelay: '0.9s' }}>{c.omarchy}</text>
    </svg>
  )
}
