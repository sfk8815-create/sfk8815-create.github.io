import { useI18n } from '../i18n'

export default function Footer() {
  const { t, locale } = useI18n()
  const licenseValue = locale === 'sc'
    ? '开源可审计 · GPL-3.0-only'
    : locale === 'tc'
      ? '開源可審計 · GPL-3.0-only'
      : 'Open-source & auditable · GPL-3.0-only'

  return (
    <footer className="border-t border-raised/60 bg-ink">
      <div className="container-content py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-auto overflow-hidden rounded-md bg-white px-1.5 items-center">
                <img src="/logo.png" alt="缙云声智品牌标志" className="h-full w-auto object-contain" loading="lazy" />
              </span>
              <span className="font-display text-lg font-semibold text-textured">{t.brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
            <p className="mt-4 whitespace-pre-line text-xs leading-loose text-faint">{t.footer.rights}</p>
          </div>

          <div className="text-sm">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-label text-textured">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2.5 text-muted">
              <li>
                <a href="mailto:sfklc@hotmail.com" className="transition hover:text-cyan">
                  Fengkai Shi (sfklc@hotmail.com)
                </a>
              </li>
              <li>
                <a href="https://github.com/sfk8815-create" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-cyan">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.9 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 016 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-label text-textured">
              {t.footer.license}
            </h4>
            <p className="text-muted">{licenseValue}</p>
            <p className="mt-4 whitespace-pre-line text-xs leading-loose text-faint">{t.footer.special}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-raised/60 pt-6 text-xs text-faint sm:flex-row">
          <p className="whitespace-pre-line">{t.footer.rights}</p>
          <p className="font-mono">{t.footer.version}</p>
        </div>
      </div>
    </footer>
  )
}
