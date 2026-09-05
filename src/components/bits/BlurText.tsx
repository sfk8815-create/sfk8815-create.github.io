import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * react-bits「BlurText（模糊渐显）」组件
 * ------------------------------------------------------------
 * 设计意图：柔和、有呼吸感的文字入场动画。先模糊后清晰，
 * 配合透明度过渡，用于副标题与章节标题的轻柔揭示。
 *
 * 依赖：原生 IntersectionObserver（不引入 framer-motion，降低体积）。
 */

interface BlurTextProps {
  text: string
  delay?: number
  /** 每个字的切入延迟（ms），越小越整体 */
  charDelay?: number
  className?: string
  style?: CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  once?: boolean
}

export default function BlurText({
  text,
  delay = 0,
  charDelay = 40,
  className = '',
  style,
  as: Tag = 'p',
  once = true,
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => setShown(true), delay)
    return () => window.clearTimeout(timer)
  }, [visible, delay])

  const total = text.length
  void total

  // 按词分组：含拉丁字母的组=英文单词→nowrap 避免断词；纯 CJK（无词边界）→不 nowrap，让字间自然换行
  const groups: { idx: number[]; latin: boolean }[] = []
  ;(function build() {
    let word: number[] = [], hasLatin = false
    const flush = () => {
      if (word.length) groups.push({ idx: word, latin: hasLatin })
      word = []; hasLatin = false
    }
    for (let i = 0; i < text.length; i++) {
      const ch = text[i]
      if (ch === ' ') {
        flush()
        groups.push({ idx: [], latin: false } as never) // 空格占位
      } else {
        word.push(i)
        if (/[A-Za-z]/.test(ch)) hasLatin = true
      }
    }
    flush()
  })()

  return (
    <Tag ref={ref as never} className={className} style={style} aria-label={text}>
      {groups.map((g, gi) => {
        if (!g.idx.length) {
          // 空格
          return (
            <span
              key={gi}
              aria-hidden="true"
              className="inline-block"
              style={{ width: '0.28em', opacity: shown ? 1 : 0, transition: 'opacity 0.6s ease' }}
            />
          )
        }
        const wrap = g.latin ? 'whitespace-nowrap' : '' // 仅拉丁词禁断词
        return (
          <span
            key={gi}
            aria-hidden="true"
            className={`inline-block ${wrap}`}
            style={{ opacity: shown ? 1 : 0, transition: 'opacity 0.6s ease', transitionDelay: `${gi * charDelay}ms` }}
          >
            {g.idx.map((i) => (
              <span
                key={i}
                className="inline-block will-change-[filter,opacity,transform]"
                style={{
                  display: 'inline-block',
                  opacity: shown ? 1 : 0,
                  filter: shown ? 'blur(0px)' : 'blur(12px)',
                  transform: shown ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.6s ease, filter 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${i * charDelay}ms`,
                }}
              >
                {text[i]}
              </span>
            ))}
          </span>
        )
      })}
    </Tag>
  )
}
