import { useI18n } from '../i18n'
import { PALETTE } from './chartCore'

// C1 · 九大分析模块 → 四大能力族（Type Colonnade，手写 SVG）—— 文案走 i18n
export default function EngineFamilies() {
  const { t } = useI18n()
  const c = t.charts
  const famY = (j: number) => 34 + j * 56
  const engY = (i: number) => 30 + i * 24
  const W = 400, H = 300
  const FAM: Record<string, number> = {}
  c.engines.forEach((name, i) => {
    // 按顺序：时域1 / 频域3 / 音高嗓音3 / 空间实时2（开发报告九模块归属）
    const mapping = [0, 1, 1, 1, 2, 2, 2, 3, 3]
    FAM[name] = mapping[i]
  })

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${c.c1t}: ${c.fam.join(' / ')}`}>
      {c.engines.map((name, i) => (
        <text key={name} x={96} y={engY(i) + 2} fontSize={6.5} fill={PALETTE.mut} textAnchor="end" className="chart-fade" style={{ animationDelay: `${i * 0.012}s` }}>
          {name}
        </text>
      ))}
      {c.engines.map((name, i) => {
        const yi = engY(i), yj = famY(FAM[name])
        return <path key={'p' + name} d={`M108 ${yi} C 190 ${yi} 210 ${yj} 268 ${yj}`} fill="none" stroke={PALETTE.grid} strokeWidth={0.6} opacity={0.9} pathLength={1} className="chart-draw" style={{ animationDelay: `${0.2 + i * 0.015}s` }} />
      })}
      {c.fam.map((f, j) => {
        const n = [1, 3, 3, 2][j]
        const r = 4 + n * 3.4
        const fill = j === 1 ? PALETTE.hero : n === 3 ? PALETTE.data3 : n === 2 ? PALETTE.data2 : PALETTE.data
        return (
          <g key={f}>
            <circle cx={272} cy={famY(j)} r={r} fill={fill} className="chart-pop" style={{ animationDelay: `${0.6 + j * 0.05}s` }} />
            <text x={272 + r + 6} y={famY(j) + 2.5} fontSize={7} fontWeight={700} fill={PALETTE.txt} className="chart-fade" style={{ animationDelay: `${0.65 + j * 0.05}s` }}>{f}</text>
          </g>
        )
      })}
      <text x={272} y={292} fontSize={6} fill={PALETTE.faint} textAnchor="middle" className="chart-fade" style={{ animationDelay: '0.9s' }}>{c.fam_label}</text>
    </svg>
  )
}
