import { BrowserRouter, HashRouter, Routes, Route, useParams } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import Product from './components/Product'
import PitchEngines from './components/PitchEngines'
import Download from './components/Download'
import Charts from './charts/Charts'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Vision from './components/Vision'
import CTA from './components/CTA'
import ProductPage from './components/ProductPage'

// AcouScope 主页面（默认展示，路由 `/`）
function AcouScopeHome() {
  return (
    <main>
      <Hero />
      <StatsBanner />
      <Product />
      <PitchEngines />
      <Screenshots />
      <Download />
      <Charts />
      <Features />
      <Vision />
      <CTA />
    </main>
  )
}

// 从路由参数取 slug 并渲染对应产品详情
function ProductRoute() {
  const { slug } = useParams()
  return <ProductPage slug={slug as string} />
}

export default function App() {
  // 折衷：Vercel 用 BrowserRouter（URL 干净，Vercel 有 SPA 重写）；GitHub Pages 用 HashRouter（防刷新 404）
  const Router = import.meta.env.VERCEL ? BrowserRouter : HashRouter
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-ink text-textured">
        <Nav />
        <Routes>
          <Route path="/" element={<AcouScopeHome />} />
          <Route path="/products/:slug" element={<ProductRoute />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
