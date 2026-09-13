import { useI18n } from '../i18n'
import { getChangelog } from '../data/changelog'
import { PALETTE } from '../charts/chartCore'
import BlurText from './bits/BlurText'
import Aurora from './bits/Aurora'

// 开发日志页（v0.98 → v0.99 更新要点，三语）—— 风格骨架同 ProductPage
export default function ChangelogPage() {
  const { t, locale } = useI18n()
  const c = getChangelog(locale)

  return (
    <main className="bg-ink text-textured">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Aurora speed={0.2} className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        </div>

        <div className="container-content relative z-10">
          <nav className="flex items-center gap-3 text-sm text-muted">
            <a href="/" className="transition hover:text-cyan">{t.nav.product}</a>
            <span aria-hidden="true">/</span>
            <span className="text-textured">{t.nav.changelog}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-raised bg-surface/70 px-4 py-1.5 font-mono text-xs text-muted backdrop-blur">
              {c.version}
            </span>

            <BlurText
              as="p"
              text={c.title}
              charDelay={18}
              className="mt-6 font-display text-3xl font-bold leading-[1.08] text-textured sm:text-5xl"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {c.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 九类更新，每节每条一行；★ = 重磅 */}
      <section className="relative py-14">
        <div className="container-content">
          <p className="eyebrow">{t.changelog.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-3xl">{t.changelog.headline}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{t.changelog.legend}</p>

          <div className="mt-10 space-y-6">
            {c.sections.map((s, i) => (
              <div key={i} className="rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur sm:p-8">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl font-display text-sm font-bold text-ink"
                    style={{ background: `linear-gradient(135deg, ${PALETTE.data2}, ${PALETTE.hero})` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-textured sm:text-xl">{s.title}</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-3">
                      {it.star ? (
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{ background: PALETTE.hero }}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan/40" aria-hidden="true" />
                      )}
                      <p className={`text-sm leading-relaxed ${it.star ? 'font-medium text-textured' : 'text-muted'}`}>
                        {it.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative border-t border-raised/60 py-14">
        <div className="container-content text-center">
          <h2 className="section-title mx-auto max-w-2xl">{t.cta.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.cta.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <a
              href="/#download"
              className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-semibold text-ink transition hover:brightness-110"
              style={{ background: `linear-gradient(90deg, ${PALETTE.data2}, ${PALETTE.hero})` }}
            >
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
