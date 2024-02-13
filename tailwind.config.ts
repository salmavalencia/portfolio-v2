import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
      }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1100px",
      },
    },
    colors: {
      font: {
        "primary": "#ccd6f6",
        "secondary": "#8892b0",
      },
      green: "#64ffda",
      navy: {
        light: "#112240",
        dark: "#0a192f"
      }
    }
  },
  plugins: [],
}
export default config
