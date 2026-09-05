import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'

/**
 * react-bits「Magnet（磁吸按钮）」组件
 * ------------------------------------------------------------
 * 设计意图：CTA 按钮在鼠标靠近时被轻微「吸附」，增强转化区
 * 的交互反馈。可指定吸附强度与位移上限，返回后平滑复位。
 *
 * 纯指针事件，零依赖。
 */

interface MagnetProps {
  children: ReactNode
  className?: string
  /** 吸附位移上限（px） */
  magnetDistance?: number
  /** 触发吸附的感应半径因子 */
  strength?: number
  disabled?: boolean
}

export default function Magnet({
  children,
  className = '',
  magnetDistance = 40,
  strength = 0.3,
  disabled = false,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.hypot(dx, dy)
    if (dist < rect.width) {
      const tx = dx * strength
      const ty = dy * strength
      const clamped = Math.min(Math.hypot(tx, ty), magnetDistance)
      const scale = clamped / Math.max(1, Math.hypot(tx, ty))
      el.style.transform = `translate(${tx * scale}px, ${ty * scale}px)`
    } else {
      el.style.transform = ''
    }
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-block ${className}`}
      style={{
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
