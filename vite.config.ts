import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // 暴露 VERCEL 环境变量：Vercel 端 import.meta.env.VERCEL 为真 → 用 BrowserRouter；GitHub Pages 无该变量 → HashRouter
  envPrefix: ['VITE_', 'VERCEL'],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900,
  },
})
