import type { ReactNode } from 'react'
import { PALETTE } from './chartCore'

/** 图表卡片外壳：标题（结论式）+ 副题 + 内容 + 来源 */
export default function ChartCard({
  title,
  sub,
  src,
  children,
}: {
  title: string
  sub?: string
  src: string
  children: ReactNode
}) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border p-7 backdrop-blur"
      style={{ background: PALETTE.bg, borderColor: PALETTE.grid }}
    >
      <h3 className="font-display text-base font-bold tracking-tight" style={{ color: PALETTE.txt }}>
        {title}
      </h3>
      {sub && (
        <p className="mt-1.5 text-xs leading-relaxed" style={{ color: PALETTE.mut }}>
          {sub}
        </p>
      )}
      <div className="mt-5">{children}</div>
      {src && (
        <p
          className="mt-5 text-[10px] font-medium uppercase tracking-[0.08em]"
          style={{ color: PALETTE.faint }}
        >
          {src}
        </p>
      )}
    </div>
  )
}
