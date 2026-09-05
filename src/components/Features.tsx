import { useI18n } from '../i18n'
import SpotlightCard from './bits/SpotlightCard'

export default function Features() {
  const { t } = useI18n()
  const items = t.features.items

  return (
    <section id="features" className="relative py-12 sm:py-16">
      <div className="container-content">
        {/* 区块标题 */}
        <div className="max-w-2xl">
          <p className="eyebrow">{t.features.eyebrow}</p>
          <h2 className="section-title mt-4">{t.features.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{t.features.desc}</p>
        </div>

        {/* 特性网格（均等，无大卡空洞） */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <SpotlightCard key={item.tag}>
              <div className="card-hover group flex h-full flex-col rounded-2xl border border-raised bg-surface/70 p-7 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-raised bg-ink/60 text-cyan transition group-hover:border-cyan/50">
                    {ICONS[i % ICONS.length]}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-textured">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

/* 简化线框图标，保持轻量 */
const ICONS = [
  <svg key="w" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12c2-4 3-6 4-6s2 6 3 6 2-9 3-9 2 9 3 9 2-4 3-4" /></svg>,
  <svg key="f" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 18V6M8 18V10M12 18V4M16 18v-6M20 18V8" /></svg>,
  <svg key="s" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="5" rx="1" /><rect x="3" y="10" width="18" height="5" rx="1" /><rect x="3" y="16" width="18" height="5" rx="1" /></svg>,
  <svg key="p" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 20c4-1 6-4 8-8s4-7 8-8" /></svg>,
  <svg key="t" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18M6 15l4-6 4 4 5-8" /></svg>,
  <svg key="a" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3a9 9 0 109 9M12 3a9 9 0 019 9M12 3v9h9" /></svg>,
]
