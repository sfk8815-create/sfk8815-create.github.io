import { useI18n } from '../i18n'
import { getQuickstart, renderShortcuts } from '../data/quickstart'
import { PALETTE } from '../charts/chartCore'
import BlurText from './bits/BlurText'
import Aurora from './bits/Aurora'

// 帮助页（快速入门 + 快捷键说明，三语）—— 风格骨架同 ChangelogPage
// 14 条逐字镜像应用内帮助（help_dialogs.py QUICK_START）；{sc_*} 占位符经 SC_KEYS 统一替换
const VERSION = 'v0.99.20260904' // 页面顶部徽标版本（站点统一口径）

export default function HelpPage() {
  const { t, locale } = useI18n()
  const q = getQuickstart(locale)

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
            <span className="text-textured">{t.nav.help}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-raised bg-surface/70 px-4 py-1.5 font-mono text-xs text-muted backdrop-blur">
              {VERSION}
            </span>

            <BlurText
              as="p"
              text={t.nav.help}
              charDelay={18}
              className="mt-6 font-display text-3xl font-bold leading-[1.08] text-textured sm:text-5xl"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.help.legend}
            </p>
          </div>
        </div>
      </section>

      {/* 快速入门：14 条有序列表（逐字镜像应用内帮助） */}
      <section className="relative py-14">
        <div className="container-content">
          <p className="eyebrow">{t.help.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-3xl">{t.help.headline}</h2>

          <div className="mt-10 rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur sm:p-8">
            <ol className="space-y-4">
              {q.items.map((it, i) => {
                const rendered = renderShortcuts(it.text)
                const idx = rendered.indexOf('</b>')
                const lead = idx >= 0 ? rendered.slice(0, idx + 4) : ''
                const rest = idx >= 0 ? rendered.slice(idx + 4) : rendered
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold text-ink"
                      style={{ background: `linear-gradient(135deg, ${PALETTE.data2}, ${PALETTE.hero})` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">
                      {lead ? (
                        <>
                          <span className="font-semibold text-textured">{lead}</span>
                          {rest}
                        </>
                      ) : (
                        rendered
                      )}
                    </p>
                  </li>
                )
              })}
            </ol>
            <p className="mt-6 border-t border-raised/60 pt-5 text-sm leading-relaxed text-muted">
              {renderShortcuts(q.footnote)}
            </p>
          </div>
        </div>
      </section>

      {/* 快捷键说明 */}
      <section className="relative py-14">
        <div className="container-content">
          <h2 className="section-title max-w-3xl">{t.help.shortcutsTitle}</h2>
          <div className="mt-6 rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur sm:p-8">
            <p className="text-sm leading-relaxed text-muted">
              {t.help.shortcutsNote.split('Ctrl').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <kbd className="mx-1 rounded-md border border-raised bg-surface px-2 py-0.5 font-mono text-xs text-textured">
                      Ctrl
                    </kbd>
                  )}
                </span>
              ))}
            </p>
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
