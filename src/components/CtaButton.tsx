import type { ReactNode } from 'react'
import Magnet from './bits/Magnet'
import BorderGlow from './bits/BorderGlow'

/** CTA 主按钮 —— Magnet 磁吸 + BorderGlow 流光边框 */
export default function CtaButton({
  children,
  href = '#download',
  className = '',
}: {
  children: ReactNode
  href?: string
  className?: string
}) {
  return (
    <Magnet className={className}>
      <BorderGlow duration={5}>
        <a
          href={href}
          className="group flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-base font-semibold text-textured"
        >
          <span
            className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-cyan to-aurora text-ink transition-transform group-hover:scale-110"
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M12 3v13m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
          </span>
          {children}
        </a>
      </BorderGlow>
    </Magnet>
  )
}
