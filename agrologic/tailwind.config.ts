import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'agro-green': {
          50: '#f0f9f0',
          100: '#dbf0db',
          500: '#2e7d32',
          600: '#1b5e20',
          700: '#0d5302',
        },
        'agro-orange': {
          500: '#ff9800',
          600: '#ef6c00',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config