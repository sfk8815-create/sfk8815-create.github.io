import type { ReactNode } from 'react'

/**
 * react-bits「BorderGlow（流光边框）」组件
 * ------------------------------------------------------------
 * 设计意图：为 CTA 主按钮添加流动的高光边框，营造「声波流动」
 * 的科技感。通过 conic-gradient 旋转实现近乎零成本的流光效果。
 */

interface BorderGlowProps {
  children: ReactNode
  className?: string
  /** 流光渐变的颜色 */
  colors?: string[]
  /** 旋转动画周期（s） */
  duration?: number
}

export default function BorderGlow({
  children,
  className = '',
  colors = ['#116AA3', '#2E9BFF', '#7C5CFF', '#2E9BFF', '#116AA3'],
  duration = 6,
}: BorderGlowProps) {
  return (
    <div className={`relative rounded-2xl p-px ${className}`}>
      {/* 旋转的彩色渐变作为边框 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `conic-gradient(from var(--angle, 0deg), ${colors.join(',')})`,
          animation: `border-spin ${duration}s linear infinite`,
          WebkitAnimation: `border-spin ${duration}s linear infinite`,
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl bg-ink/[0.97]">
        {children}
      </div>
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          to { --angle: 360deg; }
        }
      `}</style>
    </div>
  )
}
