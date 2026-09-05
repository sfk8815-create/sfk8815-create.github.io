import { useI18n } from '../i18n'
import { PALETTE } from '../charts/chartCore'
import { scrollToId } from '../utils/scroll'

// 三套 SOTA 音高检测引擎 —— 详细、重点介绍
export default function PitchEngines() {
  const { t } = useI18n()
  const p = t.pitch

  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="section-title mt-4">{p.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.subtitle}</p>
        </div>

        {/* 共同特性 */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-cyan/25 bg-surface/50 px-4 py-2.5 text-sm text-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
          {p.common}
        </div>

        {/* 三引擎详细对比 */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {p.engines.map((e, i) => {
            const accent = [PALETTE.data2, PALETTE.data3, PALETTE.hero][i % 3]
            return (
              <div
                key={e.name}
                className="flex h-full flex-col rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-textured">{e.name}</span>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={{ background: 'rgba(46,155,255,.10)', color: accent, border: `1px solid ${accent}55` }}
                  >
                    {e.role}
                  </span>
                </div>

                <dl className="mt-5 space-y-3 text-sm">
                  <Row k={t.charts.rowPrec} v={e.acc} />
                  <Row k={t.charts.rowUse} v={e.use} />
                </dl>

                <a
                  type="button" onClick={() => scrollToId('features')}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition hover:text-cyan"
                  style={{ color: accent }}
                >
                  {t.nav.features}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14m0 0l-5-5m5 5l5-5" /></svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-raised/60 pb-2.5 last:border-0">
      <dt className="text-[11px] uppercase tracking-wider text-faint">{k}</dt>
      <dd className="font-medium text-textured">{v}</dd>
    </div>
  )
}
