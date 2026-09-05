import { useI18n } from '../i18n'
import BlurText from './bits/BlurText'
import { PLATFORMS } from '../data/platforms'

export default function Product() {
  const { t } = useI18n()

  return (
    <section id="product" className="relative py-12 sm:py-16">
      <div className="container-content">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1fr]">
          {/* 左：产品介绍文案 */}
          <div className="flex flex-col">
            <p className="eyebrow">{t.product.label}</p>
            <BlurText
              as="h2"
              text={t.product.title}
              charDelay={18}
              className="mt-4 whitespace-nowrap font-display font-semibold leading-tight text-textured"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.9rem)' }}
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted lg:text-[1.05rem]">{t.product.body}</p>

            {/* 能力速览（硬数字） */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { n: '3×', l: 'Pitch engines' },
                { n: '38×', l: 'Realtime' },
                { n: '<140MB', l: 'Peak memory' },
                { n: '196s', l: 'Per 30-min' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-raised bg-surface/60 p-3.5">
                  <p className="font-display text-xl font-bold text-textured">{s.n}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3 rounded-xl border border-cyan/25 bg-surface/50 px-4 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan">{t.charts.stdArchive}</span>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan">IASA-TC 04</span>
                <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan">IMDI</span>
                <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan">GB/T 31219.4</span>
                <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2.5 py-1 font-mono text-[11px] text-cyan">DA/T 63</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {['/wav', '/flac', '/mp3', '/ogg', '/opus'].map((ext) => (
                <span
                  key={ext}
                  className="rounded-lg border border-raised bg-surface/60 px-3 py-1.5 font-mono text-xs text-cyan/90"
                >
                  {ext}
                </span>
              ))}
            </div>
          </div>

          {/* 右：跨平台能力（三大操作系统 → 子平台） */}
          <div className="h-full rounded-2xl border border-raised bg-surface/60 p-7 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan to-aurora text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 18v3" />
                </svg>
              </span>
              <h3 className="font-display text-lg font-semibold text-textured">
                {t.product.spectrum}
              </h3>
            </div>

            <div className="mt-6 space-y-6">
              {PLATFORMS.map((group) => (
                <div key={group.key}>
                  <div className="flex items-center gap-3 border-b border-raised/60 pb-2">
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-raised font-mono text-xs font-semibold text-textured">
                      {group.mark}
                    </span>
                    <span className="font-display text-base font-semibold tracking-wide text-textured">
                      {group.os}
                    </span>
                  </div>
                  <ul className="mt-2">
                    {group.subs.map((sub) => (
                      <li
                        key={sub.name}
                        className="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                          <span className="text-sm font-medium text-textured">{sub.name}</span>
                        </div>
                        <span className="font-mono text-xs text-faint sm:text-right">
                          {sub.pkg} · {sub.min}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
