import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { PLATFORMS, detectOS, type OSKey } from '../data/platforms'

/** 下载区 —— 根据操作系统高亮对应版本，并提供其他平台入口 */
export default function Download() {
  const { t } = useI18n()
  const [detected, setDetected] = useState<OSKey | null>(null)

  useEffect(() => {
    setDetected(detectOS())
  }, [])

  const highlighted = (detected ? PLATFORMS.find((p) => p.key === detected) : undefined) ?? PLATFORMS[0]
  const otherPlatforms = PLATFORMS.filter((p) => p.key !== highlighted.key)

  return (
    <section id="download" className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-surface/40 to-ink" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="container-content relative z-10">
        {/* 标题 */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.download.eyebrow}</p>
          <h2 className="section-title mt-4">{t.download.title}</h2>
          <p className="mt-5 text-lg text-muted">{t.download.subtitle}</p>
        </div>

        {/* 主推：根据系统高亮的平台 */}
        <div className="mt-8 rounded-3xl border border-cyan/30 bg-surface/70 p-8 shadow-2xl backdrop-blur sm:p-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
              {t.download.recommend}
            </span>
            <span className="font-display text-2xl font-semibold text-textured">{highlighted.os}</span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {highlighted.subs.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-raised bg-ink/40 px-5 py-4"
              >
                <div className="min-w-0">
                  <p className="font-medium text-textured">{sub.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{sub.pkg} · {sub.min}</p>
                </div>
                <span className="shrink-0 rounded-lg border border-raised px-3 py-1.5 text-xs font-medium text-faint">
                  {t.download.coming}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 其他平台 */}
        <div className="mt-8">
          <h3 className="eyebrow">{t.download.allTitle}</h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {otherPlatforms.map((p) => (
              <div key={p.key} className="rounded-2xl border border-raised bg-surface/60 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-raised font-mono text-xs font-semibold text-textured">
                    {p.mark}
                  </span>
                  <span className="font-display text-lg font-semibold text-textured">{p.os}</span>
                </div>
                <ul className="mt-4 space-y-3">
                  {p.subs.map((sub) => (
                    <li key={sub.name} className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-textured">{sub.name}</p>
                        <p className="font-mono text-[11px] text-faint">
                          {sub.pkg} · {sub.min}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg border border-raised px-3 py-1.5 text-xs font-medium text-faint">
                        {t.download.coming}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-faint">{t.download.note}</p>
        <p className="mt-2 text-center text-[11px] text-faint/70">{t.download.releaseHint}</p>
      </div>
    </section>
  )
}
