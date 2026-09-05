import { useI18n } from '../i18n'
import CountUp from './bits/CountUp'

const STATS: { value: number; suffix: string; key: 'engines' | 'tests' | 'realtime' | 'themes' }[] = [
  { value: 3, suffix: '', key: 'engines' },
  { value: 38, suffix: '×', key: 'realtime' },
  { value: 403, suffix: '+', key: 'tests' },
  { value: 10, suffix: '', key: 'themes' },
]

/** 数据指标带 —— 滚动进入视口时数字滚动 */
export default function StatsBanner() {
  const { t } = useI18n()
  return (
    <section className="relative border-y border-raised/60 bg-surface/40">
      <div className="container-content grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.key} className="flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10">
            <CountUp
              end={s.value}
              suffix={s.suffix}
              className="font-display text-3xl font-bold text-textured sm:text-4xl"
            />
            <span className="mt-1.5 text-sm text-muted">{t.stats[s.key]}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
