import { useI18n } from '../i18n'
import ChartCard from './ChartCard'
import EngineFamilies from './EngineFamilies'
import CrossPlatform from './CrossPlatform'
import TestsCounter from './TestsCounter'
import Flagship from './Flagship'
import Trust from './Trust'

// 数据与洞察 · 5 张定稿图表（lieflat-charts · custom 品牌色板）
export default function Charts() {
  const { t } = useI18n()
  const c = t.charts

  return (
    <section id="charts" className="relative py-12 sm:py-16">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className="section-title mt-4">{c.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{c.desc}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ChartCard title={c.c1t} sub={c.c1s} src="TYPE COLONNADE · MONO-EDITORIAL · ACOUSCOPE">
            <EngineFamilies />
          </ChartCard>

          <ChartCard title={c.c2t} sub={c.c2s} src="ARC MATRIX · MONO-EDITORIAL · CROSS-PLATFORM">
            <CrossPlatform />
          </ChartCard>

          <ChartCard title={c.c3t} sub={c.c3s} src="DRAW-IN + COUNTER · GLANCE · TEST SUITE">
            <TestsCounter />
          </ChartCard>

          <ChartCard title={c.c4t} sub={c.c4s} src="FLAGSHIP · MONO-EDITORIAL · ACOUSCOPE">
            <Flagship />
          </ChartCard>
        </div>

        <div className="mt-6">
          <ChartCard title={c.c5t} sub={c.c5s} src="TRUST BAND · MONO-EDITORIAL · ACOUSCOPE">
            <Trust />
          </ChartCard>
        </div>
      </div>
    </section>
  )
}
