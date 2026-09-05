import { useState } from 'react'
import type { ReactNode, MouseEvent } from 'react'

/**
 * react-bits「SpotlightCard（聚光灯卡片）」组件
 * ------------------------------------------------------------
 * 设计意图：鼠标聚光灯跟随，用于「声学特性」Bento 卡片区。
 * 焦点随指针在卡片内移动，形成一道柔和高光，增强交互感。
 *
 * 实现：用 --x / --y 记录指针位置，配合径向渐变高光。零依赖。
 */

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  /** 高光颜色 */
  spotlightColor?: string
  spotlightOpacity?: number
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(46,155,255,0.35)',
  spotlightOpacity = 0.5,
}: SpotlightCardProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    opacity: pos ? spotlightOpacity : 0,
    background: pos
      ? `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 70%)`
      : undefined,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      <div style={overlayStyle} aria-hidden="true" />
    </div>
  )
}
