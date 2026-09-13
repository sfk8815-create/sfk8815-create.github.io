import { useI18n } from '../i18n'
import { getQuickstart, renderShortcuts } from '../data/quickstart'
import { getManual } from '../data/manual'
import { PALETTE } from '../charts/chartCore'
import { scrollToId } from '../utils/scroll'
import BlurText from './bits/BlurText'
import Aurora from './bits/Aurora'

// 帮助页（快速入门 + 快捷键说明，三语）—— 风格骨架同 ChangelogPage
// 14 条逐字镜像应用内帮助（help_dialogs.py QUICK_START）；{sc_*} 占位符经 SC_KEYS 统一替换
const VERSION = 'v0.99.20260904' // 页面顶部徽标版本（站点统一口径）

// <b>…</b> → 真实 <strong>（粗体引导词），其余纯文本原样通过（S3-c2-fix：渲染面禁裸标签）
function renderRich(text: string) {
  return text.split(/(<b>[\s\S]*?<\/b>)/g).map((part, i) =>
    part.startsWith('<b>') && part.endsWith('</b>') ? (
      <strong key={i} className="font-semibold text-textured">
        {part.slice(3, -4)}
      </strong>
    ) : (
      part
    ),
  )
}

export default function HelpPage() {
  const { t, locale } = useI18n()
  const q = getQuickstart(locale)
  const m = getManual(locale)

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

      {/* 页内锚点导航（快速入门 / 用户手册；纯站内锚点，不新增路由） */}
      <section className="relative border-b border-raised/60 py-4">
        <div className="container-content">
          <nav className="flex flex-wrap items-center gap-3 text-sm" aria-label="页面锚点">
            <a
              href="#quickstart"
              onClick={(e) => { e.preventDefault(); scrollToId('quickstart') }}
              className="rounded-full border border-raised bg-surface/70 px-4 py-1.5 text-muted backdrop-blur transition hover:text-cyan"
            >
              {t.help.headline}
            </a>
            <a
              href="#manual"
              onClick={(e) => { e.preventDefault(); scrollToId('manual') }}
              className="rounded-full border border-raised bg-surface/70 px-4 py-1.5 text-muted backdrop-blur transition hover:text-cyan"
            >
              {m.h2}
            </a>
          </nav>
        </div>
      </section>

      {/* 快速入门：14 条有序列表（逐字镜像应用内帮助） */}
      <section id="quickstart" className="relative scroll-mt-24 py-14">
        <div className="container-content">
          <p className="eyebrow">{t.help.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-3xl">{t.help.headline}</h2>

          <div className="mt-10 rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur sm:p-8">
            <ol className="space-y-4">
              {q.items.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-mono text-xs font-bold text-ink"
                    style={{ background: `linear-gradient(135deg, ${PALETTE.data2}, ${PALETTE.hero})` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {renderRich(renderShortcuts(it.text))}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-raised/60 pt-5 text-sm leading-relaxed text-muted">
              {renderRich(renderShortcuts(q.footnote))}
            </p>
          </div>
        </div>
      </section>

      {/* 用户手册：19 节（逐字镜像应用内帮助 MANUAL；第 18 节快捷键表按结构化数据以真实 <table> 渲染） */}
      <section id="manual" className="relative scroll-mt-24 py-14">
        <div className="container-content">
          <h2 className="section-title max-w-3xl">{m.h2}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {renderRich(renderShortcuts(m.intro))}
          </p>

          <div className="mt-10 space-y-6">
            {m.sections.map((sec, i) => (
              <div key={i} className="rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur sm:p-8">
                <h3 className="font-display text-lg font-bold text-textured">{sec.title}</h3>
                {sec.items ? (
                  <ul className="mt-5 space-y-3">
                    {sec.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: PALETTE.data2 }}
                        />
                        <p className="text-sm leading-relaxed text-muted">
                          {renderRich(renderShortcuts(it.text))}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-5 space-y-6">
                    {sec.tables?.map((tb, k) => (
                      <div key={k}>
                        <p className="text-sm leading-relaxed text-muted">
                          {renderRich(renderShortcuts(tb.caption))}
                        </p>
                        <div className="mt-3 overflow-x-auto rounded-xl border border-raised/60">
                          <table className="w-full min-w-[480px] text-left text-sm">
                            <thead>
                              <tr className="border-b border-raised/60">
                                {tb.headers.map((h, hi) => (
                                  <th key={hi} className="px-4 py-2.5 font-mono text-xs tracking-wide text-muted">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {tb.rows.map((r, ri) => (
                                <tr key={ri} className="border-b border-raised/40 last:border-0">
                                  <td className="px-4 py-2.5 text-muted">
                                    {renderRich(renderShortcuts(r.action))}
                                  </td>
                                  <td className="px-4 py-2.5 font-mono text-xs text-textured">
                                    {renderRich(renderShortcuts(r.key))}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
