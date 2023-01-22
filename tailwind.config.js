/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      heading: 'var(--header-font)',
      sans: 'var(--body-font)',
    },
    extend: {
      animation: {
        highlight: 'highlight 0.7s 2',
      },
      keyframes: {
        highlight: {
          '0%, 100%': {
            transform: 'scale(1)',
            background: '#fff0',
          },
          '50%': {
            opacity: 0.9,
            transform: 'scale(1.02)',
            background: '#fff3',
          },
        },
      },
    },
  },
  plugins: [],
}
