import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        shrink: 'shrink 1s infinite',
        shrinkAlternative: 'shrinkAlternative 1s infinite'
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.4)' },
          '75%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' }
        },
        shrinkAlternative: {
          '20%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(0.6)' },
          '10%': { transform: 'scale(0.8)' },
          '0%': { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: []
}
export default config
