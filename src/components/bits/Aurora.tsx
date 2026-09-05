import { useEffect, useRef } from 'react'

/**
 * react-bits「Aurora（极光）」背景组件
 * ------------------------------------------------------------
 * 设计意图：以蓝紫双色极光营造声学「空间感 / 声场」的沉浸氛围，
 * 作为 Hero 与 CTA 区的背景。使用 HTML5 Canvas + requestAnimationFrame，
 * 轻量、按需渲染，不阻塞首屏核心内容（性能优先）。
 *
 * 可通过 props 调整速度、强度与配色。
 */

interface AuroraProps {
  /** 动画速度，0.1~1，越小越慢 */
  speed?: number
  /** 合成模式，默认 screen（叠加发光） */
  blendMode?: GlobalCompositeOperation
  /** 主要颜色 */
  colorTop?: string
  colorMid?: string
  colorBottom?: string
  className?: string
}

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!m) return [46, 155, 255]
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
}

export default function Aurora({
  speed = 0.25,
  blendMode = 'screen',
  colorTop = '#116AA3',
  colorMid = '#2E9BFF',
  colorBottom = '#7C5CFF',
  className = '',
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const [r1, g1, b1] = hexToRgb(colorTop)
    const [r2, g2, b2] = hexToRgb(colorMid)
    const [r3, g3, b3] = hexToRgb(colorBottom)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let t = 0
    const draw = () => {
      t += speed * 0.016
      const w = width || 1
      const h = height || 1
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = blendMode
      // 三团平缓移动的径向渐变，模拟极光流动
      const blobs: [number, number, number, number, [number, number, number], number][] = [
        [w * 0.28 + Math.sin(t * 0.5) * w * 0.06, h * 0.4, Math.max(w, h) * 0.5, 0.7, [r1, g1, b1], 0.0015],
        [w * 0.62 + Math.cos(t * 0.4) * w * 0.08, h * 0.35, Math.max(w, h) * 0.45, 0.6, [r2, g2, b2], 0.0011],
        [w * 0.45 + Math.sin(t * 0.7) * w * 0.1, h * 0.6, Math.max(w, h) * 0.55, 0.45, [r3, g3, b3], 0.0018],
      ]
      for (const [cx, cy, r, alpha, rgb] of blobs) {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        grad.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`)
        grad.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [speed, blendMode, colorTop, colorMid, colorBottom])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  )
}
