import { useI18n } from '../i18n'
import { getProduct, getLocaleContent } from '../data/products'
import { PALETTE } from '../charts/chartCore'
import BlurText from './bits/BlurText'
import Aurora from './bits/Aurora'

// 产品详情页（sovena / omarchy-academic / mcp-cockpit 通用，全站统一风格）
export default function ProductPage({ slug }: { slug: string }) {
  const { t, locale } = useI18n()
  const product = getProduct(slug)
  if (!product) return null
  const c = getLocaleContent(product, locale)

  return (
    <main className="bg-ink text-textured">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Aurora speed={0.2} className="opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        </div>

        <div className="container-content relative z-10">
          <nav className="flex items-center gap-3 text-sm text-muted">
            <a href="/#product" className="transition hover:text-cyan">{t.nav.product}</a>
            <span aria-hidden="true">/</span>
            <span className="text-textured">{product.name}</span>
          </nav>

          <div className="mt-8 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-raised bg-surface/70 px-4 py-1.5 text-xs text-muted backdrop-blur">
              {c.category}
            </span>

            <BlurText
              as="p"
              text={c.tagline}
              charDelay={18}
              className="mt-6 font-display text-3xl font-bold leading-[1.08] text-textured sm:text-5xl"
            />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {c.desc}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={product.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-ink transition hover:brightness-110"
                style={{ background: `linear-gradient(90deg, ${PALETTE.data2}, ${product.accent})` }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.9 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 016 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg>
                {c.cta}
              </a>
              <span className="font-mono text-xs text-faint">github.com/{product.github.split('/').pop()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 核心能力 */}
      <section className="relative py-14">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">{c.category}</p>
            <h2 className="section-title mt-4">{c.featureTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.featureDesc}</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur">
                <span
                  className="inline-block h-1.5 w-8 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${PALETTE.data2}, ${product.accent})` }}
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-textured">{h.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 架构 / 生态 */}
      <section className="relative border-y border-raised/60 py-14">
        <div className="container-content grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.nav.product}</p>
            <h2 className="section-title mt-4">{c.moreTitle}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">{c.moreDesc}</p>
            <a
              href={product.github}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-raised px-5 py-2.5 text-sm font-medium text-muted transition hover:border-cyan/40 hover:text-textured"
            >
              {c.cta}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
            </a>
          </div>
          <div className="rounded-2xl border border-raised bg-surface/60 p-7 backdrop-blur">
            <div className="flex items-center gap-4">
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl font-display text-xl font-bold text-ink"
                style={{ background: `linear-gradient(135deg, ${PALETTE.data2}, ${product.accent})` }}
              >
                {product.name[0]}
              </span>
              <div>
                <p className="font-display text-xl font-bold text-textured">{product.name}</p>
                <p className="text-sm text-muted">{product.zhName}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan"/>MIT · Open Source</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan"/>© Jinyun SonicAI · 西南大学</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan"/>{c.category}</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan"/>{c.tagline}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative py-14">
        <div className="container-content text-center">
          <h2 className="section-title mx-auto max-w-2xl">{product.name} · {product.zhName}</h2>
          <p className="mt-5 text-lg text-muted">{c.featureDesc}</p>
          <div className="mt-8 flex justify-center">
            <a href={product.github} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-base font-semibold text-ink transition hover:brightness-110"
               style={{ background: `linear-gradient(90deg, ${PALETTE.data2}, ${product.accent})` }}>
              {c.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
