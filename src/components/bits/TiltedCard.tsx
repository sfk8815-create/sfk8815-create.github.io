import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'

/**
 * react-bits「TiltedCard（3D 倾斜卡片）」组件
 * ------------------------------------------------------------
 * 设计意图：磁吸式 3D 倾斜卡片，用于承载产品 Logo（icon_1024.png）
 * 与核心参数，让 Hero 区产生立体、可触摸的「声学仪表」质感。
 *
 * 纯 CSS transform + 指针事件，无第三方依赖；鼠标离开平滑复位。
 */

interface TiltedCardProps {
  children: ReactNode
  /** 最大倾斜角度（deg） */
  maxTilt?: number
  className?: string
  /** 悬停时的缩放 */
  scaleOnHover?: number
}

export default function TiltedCard({
  children,
  maxTilt = 14,
  className = '',
  scaleOnHover = 1.02,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const rx = -py * maxTilt * 2
    const ry = px * maxTilt * 2
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scaleOnHover})`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{
        willChange: 'transform',
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}
