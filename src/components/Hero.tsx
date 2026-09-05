import { useI18n } from '../i18n'
import Aurora from './bits/Aurora'
import BlurText from './bits/BlurText'
import TiltedCard from './bits/TiltedCard'
import CtaButton from './CtaButton'

export default function Hero() {
  const { t, locale } = useI18n()
  const isZh = locale === 'sc' || locale === 'tc'

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-24 sm:pt-28">
      {/* 沉浸声场背景：两层 Aurora + 网格 */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <Aurora speed={0.22} className="opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
      </div>

      <div className="container-content relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* 左列：文案 */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-raised bg-surface/70 px-4 py-1.5 text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {t.hero.badge}
          </div>

          <BlurText
            as="p"
            text={t.hero.slogan}
            charDelay={18}
            className={`mt-6 block font-display font-bold text-textured ${
              isZh
                ? 'whitespace-nowrap text-2xl leading-tight sm:text-3xl'
                : 'text-4xl leading-[1.05] sm:text-6xl'
            }`}
          />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CtaButton>{t.hero.cta1}</CtaButton>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-2xl border border-raised px-6 py-3.5 text-sm font-medium text-muted transition hover:border-cyan/40 hover:text-textured"
            >
              {t.hero.cta2}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition group-hover:translate-y-0.5">
                <path d="M12 5v14m0 0l-5-5m5 5l5-5" />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-faint">
            <span className="font-mono">{t.hero.version}</span>
            <span className="h-3 w-px bg-faint/30" aria-hidden="true" />
            <span>{t.hero.chip}</span>
          </div>
        </div>

        {/* 右列：产品 Logo 3D 倾斜卡片 */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="absolute -inset-10 rounded-full opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(46,155,255,0.4), transparent 70%)' }}
            aria-hidden="true"
          />
          <TiltedCard className="relative">
            <div className="relative overflow-hidden rounded-[2rem]">
              {/* 产品主视觉：无边框描边，用真实立体阴影 */}
              <img
                src="/icon_1024.png"
                alt="AcouScope 产品 Logo"
                className="block h-auto w-full rounded-[2rem]"
                style={{
                  boxShadow: '0 30px 70px -20px rgba(0,0,0,.75), 0 10px 30px -18px rgba(17,42,92,.9)',
                }}
                loading="eager"
              />
            </div>
            {/* 底部信息条 */}
            <div className="flex items-center justify-between px-4 pt-3">
              <div>
                <p className="font-display text-sm font-semibold text-textured">AcouScope · 音析</p>
                <p className="text-xs text-faint">Audio Analysis</p>
              </div>
              <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2 py-1 font-mono text-[11px] text-cyan">
                {t.hero.version}
              </span>
            </div>
          </TiltedCard>

          {/* 悬浮角标徽章 */}
          <div className="absolute -right-4 -top-4 flex h-16 w-16 animate-float items-center justify-center rounded-2xl border border-raised bg-surface/90 text-center shadow-xl backdrop-blur sm:-right-6">
            <div className="flex flex-col items-center leading-tight">
              <span className="font-display text-lg font-bold text-cyan">3</span>
              <span className="px-1 text-[9px] text-muted">{t.charts.pitchEng}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
