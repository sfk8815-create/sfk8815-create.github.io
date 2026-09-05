import { useEffect, useState, type CSSProperties } from 'react'

/**
 * react-bits「DecryptedText（解密文字）」组件
 * ------------------------------------------------------------
 * 设计意图：以字符「解密」动画渲染核心 Slogan，暗喻从噪声中
 * 还原出证据，呼应声学精准。逐字符从随机乱码渐变为目标文字。
 *
 * 特点：不依赖第三方动画库，纯 React state + 定时器，轻量可控。
 */

interface DecryptedTextProps {
  text: string
  speed?: number
  /** 每帧重置几个字符，越大越快 */
  scrambleChars?: string
  className?: string
  animateOn?: 'view' | 'mount'
  style?: CSSProperties
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=?<>'

export default function DecryptedText({
  text,
  speed = 60,
  scrambleChars = '',
  className = '',
  animateOn = 'view',
  style,
}: DecryptedTextProps) {
  const charset = scrambleChars || CHARS
  const [display, setDisplay] = useState(() => text.split('').map(() => ''))
  const [started, setStarted] = useState(animateOn === 'mount')

  // 进入视口时触发
  useEffect(() => {
    if (animateOn !== 'view' || started) return
    const el = document.querySelector('[data-decrypted]')
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [started, animateOn])

  useEffect(() => {
    if (!started) return
    let iteration = 0
    const frame = () => {
      const next = text
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' '
          if (iteration > i) return ch // 已解密部分保持
          return charset[Math.floor(Math.random() * charset.length)]
        })
        .join('')
      setDisplay(next.split(''))
      iteration += 1 / 3
      if (iteration <= text.length + 8) {
        setTimeout(frame, speed)
      } else {
        setDisplay(text.split(''))
      }
    }
    frame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, text, speed])

  // 把原文按词分组：词内用 nowrap 防止被拦腰折断，只在空格处换行
  const groups: (number[] | 'space')[] = []
  ;(function build() {
    let word: number[] = []
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        if (word.length) groups.push(word)
        word = []
        groups.push('space')
      } else {
        word.push(i)
      }
    }
    if (word.length) groups.push(word)
  })()

  return (
    <span data-decrypted className={className} style={style} aria-label={text}>
      {groups.map((g, gi) => {
        if (g === 'space') {
          return <span key={gi} aria-hidden="true" className="inline-block" style={{ width: '0.28em' }} />
        }
        return (
          <span key={gi} aria-hidden="true" className="inline-block whitespace-nowrap">
            {g.map((i) => {
              const ch = display[i]
              return (
                <span key={i} className="inline-block">
                  {ch === ' ' || ch === '\u00A0' ? '' : ch}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
