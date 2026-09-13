import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import LanguageSwitcher from './LanguageSwitcher'
import { OTHER_PRODUCTS } from '../data/products'
import { scrollToId } from '../utils/scroll'

/** 顶部导航 —— 玻璃拟态；「产品」下挂 4 个子页，默认 AcouScope */
export default function Nav() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // AcouScope 主页 + 其它产品
  const products = [
    { name: 'AcouScope · 音析', zh: 'AcouScope', href: '/', current: isHome },
    ...OTHER_PRODUCTS.map((p) => ({
      name: p.name,
      zh: p.zhName,
      href: `/products/${p.slug}`,
      current: location.pathname === `/products/${p.slug}`,
    })),
  ]

  const anchorLinks = [
    { label: t.nav.features, id: 'features' },
    { label: t.nav.vision, id: 'vision' },
    { label: t.nav.download, id: 'download' },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-raised/60 bg-ink/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Jinyun SonicAI">
          <span className="hidden h-7 w-auto overflow-hidden rounded-md bg-white px-1.5 sm:inline-flex sm:items-center">
            <img src="/logo.png" alt="缙云声智品牌标志" className="h-full w-auto object-contain" loading="eager" />
          </span>
          <span className="font-display text-sm font-semibold tracking-wide text-textured">
            {t.brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {/* 产品下拉 */}
          <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
            <button
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-muted transition hover:bg-raised/60 hover:text-textured"
              aria-haspopup="menu"
              aria-expanded={productOpen}
            >
              {t.nav.product}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {productOpen && (
              <div className="absolute left-0 top-full mt-2 w-60 overflow-hidden rounded-2xl border border-raised bg-surface/95 p-1.5 shadow-2xl backdrop-blur-xl">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      p.current ? 'bg-cyan/15 text-cyan' : 'text-muted hover:bg-raised/60 hover:text-textured'
                    }`}
                  >
                    <span>{p.name}</span>
                    <span className="text-[10px] text-faint">{p.zh}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isHome &&
            anchorLinks.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)} className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
                {l.label}
              </button>
            ))}
          {!isHome && (
            <Link to="/" className="rounded-full px-4 py-2 text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
              {t.nav.features}
            </Link>
          )}
          <Link
            to="/changelog"
            className={`rounded-full px-4 py-2 text-sm transition ${
              location.pathname === '/changelog' ? 'bg-cyan/15 text-cyan' : 'text-muted hover:bg-raised/60 hover:text-textured'
            }`}
          >
            {t.nav.changelog}
          </Link>
          <Link
            to="/help"
            className={`rounded-full px-4 py-2 text-sm transition ${
              location.pathname === '/help' ? 'bg-cyan/15 text-cyan' : 'text-muted hover:bg-raised/60 hover:text-textured'
            }`}
          >
            {t.nav.help}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={isHome ? '#download' : '/#download'}
            onClick={(e) => { e.preventDefault(); if (isHome) scrollToId('download') }}
            className="hidden rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan/20 md:inline-block"
          >
            {t.hero.cta1}
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-raised text-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {open && (
        <nav className="border-t border-raised/60 bg-ink/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            <p className="px-3 py-1.5 text-xs uppercase tracking-wider text-faint">{t.nav.product}</p>
            {products.map((p) => (
              <Link key={p.href} to={p.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
                {p.name} <span className="text-[10px] text-faint">{p.zh}</span>
              </Link>
            ))}
            {isHome &&
              anchorLinks.map((l) => (
                <button key={l.id} onClick={() => { scrollToId(l.id); setOpen(false) }} className="rounded-xl px-3 py-2.5 text-left text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
                  {l.label}
                </button>
              ))}
            <Link to="/changelog" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
              {t.nav.changelog}
            </Link>
            <Link to="/help" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm text-muted transition hover:bg-raised/60 hover:text-textured">
              {t.nav.help}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
