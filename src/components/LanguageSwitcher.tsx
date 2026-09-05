import { useState } from 'react'
import { LOCALES, useI18n, type Locale } from '../i18n'

/** 语言切换器 —— 双语（简体中文 / 繁體中文 / English） */
export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0]

  const pick = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-raised bg-ink/60 px-4 py-2 text-sm text-muted transition hover:border-cyan/40 hover:text-textured"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9z" />
        </svg>
        <span>{current.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-raised bg-surface/95 p-1.5 shadow-2xl backdrop-blur-xl">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => pick(l.code)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                l.code === locale ? 'bg-cyan/15 text-cyan' : 'text-muted hover:bg-raised/60 hover:text-textured'
              }`}
            >
              <span>{l.label}</span>
              {l.code === locale ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : null}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
