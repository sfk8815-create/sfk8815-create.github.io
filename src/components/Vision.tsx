import { useI18n } from '../i18n'
import BlurText from './bits/BlurText'
import Aurora from './bits/Aurora'

export default function Vision() {
  const { t } = useI18n()

  return (
    <section id="vision" className="relative overflow-hidden border-y border-raised/60 py-12 sm:py-16">
      <div className="absolute inset-0" aria-hidden="true">
        <Aurora speed={0.18} colorTop="#116AA3" colorMid="#7C5CFF" colorBottom="#2E9BFF" className="opacity-50" />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div className="container-content relative z-10 grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* 左：工作室 Logo（横向锁标，白底） */}
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          <div className="relative w-full overflow-hidden rounded-2xl border border-raised bg-white p-6 shadow-2xl">
            <img src="/logo.png" alt="Jinyun SonicAI · 缙云声智 品牌 Logo" className="mx-auto w-full" loading="lazy" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {t.vision.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-raised bg-ink/60 px-3 py-1 text-xs text-muted"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* 右：愿景文案 */}
        <div>
          <p className="eyebrow">{t.vision.eyebrow}</p>
          <h2 className="section-title mt-4">{t.vision.title}</h2>

          <div className="mt-8 border-l-2 border-cyan/60 pl-6">
            <BlurText
              as="p"
              text={t.vision.quote}
              charDelay={30}
              className="font-display text-xl font-medium leading-relaxed text-textured sm:text-2xl"
            />
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            <p>{t.vision.bodyTop}</p>
            <p>{t.vision.bodyBottom}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
