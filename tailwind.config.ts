import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // important
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22326a',
        secondary: '#ff914d',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
        dark: {
          bg: '#111827',
          surface: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
export default config
