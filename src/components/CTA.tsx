import { useI18n } from '../i18n'
import Aurora from './bits/Aurora'
import CtaButton from './CtaButton'

export default function CTA() {
  const { t } = useI18n()

  return (
    <section id="cta" className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0" aria-hidden="true">
        <Aurora speed={0.25} className="opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="container-content relative z-10 text-center">
        <span className="mx-auto mb-8 inline-block rounded-full border border-raised bg-surface/70 px-4 py-1.5 text-xs uppercase tracking-label text-muted backdrop-blur">
          Immersive CTA
        </span>
        <h2 className="section-title mx-auto max-w-3xl">{t.cta.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{t.cta.subtitle}</p>

        <div className="mt-10 flex justify-center">
          <CtaButton href="#download">{t.cta.button}</CtaButton>
        </div>

      </div>
    </section>
  )
}
