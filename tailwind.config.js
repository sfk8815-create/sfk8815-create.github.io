/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 声学配色系统（见设计方案 Step 1）
        ink: '#05070C', // 背景基底
        surface: '#0A101E', // 表面层
        raised: '#111A2E', // 浮起层
        sonic: '#116AA3', // 声波蓝（品牌主色）
        cyan: '#2E9BFF', // 荧光青（主强调）
        aurora: '#7C5CFF', // 极光紫（辅强调）
        academic: '#E8C97A', // 学术金（点缀）
        textured: '#F5F7FA', // 主文字
        muted: '#9AA7BC', // 次级文字
        faint: '#6B7688', // 弱化文字
      },
      fontFamily: {
        display: ['Sora', 'Smiley Sans', 'Noto Sans SC', 'sans-serif'],
        body: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.2em',
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
