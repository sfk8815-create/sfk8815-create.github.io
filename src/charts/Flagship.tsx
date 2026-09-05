import { useI18n } from '../i18n'
import { PALETTE } from './chartCore'

// C4 · 旗舰卖点：出版级出图 + AI 释图（价值卡）—— 文案走 i18n
export default function Flagship() {
  const { t } = useI18n()
  const flags = t.charts.flag
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {flags.map((f) => (
        <div key={f.title} className="flex flex-col rounded-2xl border p-6" style={{ background: 'linear-gradient(180deg, rgba(46,155,255,.08), transparent)', borderColor: PALETTE.grid }}>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: PALETTE.hero, borderColor: 'rgba(232,201,122,.4)' }}>◆ {f.badge}</span>
          <h3 className="mt-4 font-display text-lg font-bold" style={{ color: PALETTE.txt }}>{f.title}</h3>
          <p className="mt-1.5 text-sm font-semibold" style={{ color: PALETTE.mut }}>{f.hook}</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {f.points.map((p) => <li key={p} className="flex gap-2 text-xs leading-relaxed" style={{ color: PALETTE.mut }}><span className="font-extrabold" style={{ color: PALETTE.data2 }}>·</span>{p}</li>)}
          </ul>
          <div className="mt-5 flex gap-6 border-t pt-4" style={{ borderColor: PALETTE.grid }}>
            {f.stats.map((s) => <div key={s.l}><p className="text-lg font-extrabold" style={{ color: PALETTE.txt }}>{s.n}</p><p className="text-[10px] uppercase tracking-wider" style={{ color: PALETTE.faint }}>{s.l}</p></div>)}
          </div>
        </div>
      ))}
    </div>
  )
}
