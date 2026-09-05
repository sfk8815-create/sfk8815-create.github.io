import { useI18n } from '../i18n'
import { PALETTE } from './chartCore'

// C5 · 信任背书（徽标带）—— 文案走 i18n
export default function Trust() {
  const { t } = useI18n()
  const tiles = t.charts.trust
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {tiles.map((t2) => (
        <div key={t2.label} className="flex min-h-[96px] flex-col justify-between gap-3 rounded-2xl border p-4" style={{ background: 'linear-gradient(180deg, rgba(46,155,255,.07), transparent)', borderColor: PALETTE.grid }}>
          <p className="text-2xl font-extrabold leading-none" style={{ color: PALETTE.txt }}>{t2.n}</p>
          <div>
            <p className="text-[11px] font-semibold" style={{ color: PALETTE.mut }}>{t2.label}</p>
            <p className="mt-1 text-[9px] uppercase tracking-wider" style={{ color: PALETTE.faint }}>{t2.tag}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
