import { useCallback, useEffect, useState } from 'react'
import { useI18n } from '../i18n'

// 0.99 全新「三栏工作台」+ 真实界面截图（点击可放大）—— 文案走 i18n
export default function Screenshots() {
  const { t } = useI18n()
  const tr = t.screenshots
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen((o) => (o === null ? o : (o + tr.shots.length - 1) % tr.shots.length)), [tr.shots.length])
  const next = useCallback(() => setOpen((o) => (o === null ? o : (o + 1) % tr.shots.length)), [tr.shots.length])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, close, prev, next])

  const current = open === null ? null : tr.shots[open]

  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">{tr.eyebrow}</p>
          <h2 className="section-title mt-4">{tr.title}</h2>
          <p className="mt-5 text-lg text-muted">{tr.subtitle}</p>
        </div>

        {/* 三栏工作台说明 */}
        <div className="mt-8 grid gap-5 rounded-2xl border border-raised bg-surface/60 p-7 backdrop-blur md:grid-cols-3">
          {tr.panes.map((p) => (
            <div key={p.label}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-semibold text-cyan">{p.label}</span>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 界面截图（点击放大） */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {tr.shots.map((s, i) => (
            <button key={s.alt} type="button" onClick={() => setOpen(i)} className="group overflow-hidden rounded-2xl border border-raised bg-surface/60 text-left transition hover:border-cyan/40" aria-label={`${tr.zoom}：${s.label}`}>
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <img src={'/screenshots/' + (['fft-spectrum', 'realtime-features', '3d-spectrum'][i]) + '.png'} alt={s.alt} loading="lazy" className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition group-hover:bg-ink/30 group-hover:opacity-100">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink/70 text-textured">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-sm text-muted">
                {s.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-faint"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox 模态 */}
      {current && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" onClick={close} role="dialog" aria-modal="true" aria-label={current.alt}>
          <button onClick={close} aria-label={tr.close} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-textured transition hover:bg-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} aria-label={tr.prev} className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-textured transition hover:bg-white/20 sm:left-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <figure className="relative max-h-full max-w-5xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={'/screenshots/' + (['fft-spectrum', 'realtime-features', '3d-spectrum'][open!]) + '.png'} alt={current.alt} className="max-h-[86vh] w-auto rounded-2xl object-contain" style={{ boxShadow: '0 30px 80px -20px rgba(0,0,0,.8)' }} />
            <figcaption className="mt-3 text-center text-sm text-muted">{current.label}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); next() }} aria-label={tr.next} className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-textured transition hover:bg-white/20 sm:right-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}
