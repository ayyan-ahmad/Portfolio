/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#1d1d1d',
        'theme-main': '#ffdd40',
        'theme-sub-text': '#ffffff',
        'theme-nav': '#181818'
      },
      fontFamily: {
        sans: ['"Roboto Slab"', 'serif'],
        serif: ['serif']
      },
      keyframes: {
        typingEffectAnimation: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        rotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      },
      animation: {
        'typing': 'typingEffectAnimation 2.5s steps(30, end)',
        'rotation': 'rotation 10s linear 0.5s infinite',
        'slideIn': 'slideIn 0.3s ease',
      }
    },
  },
  plugins: [],
}
