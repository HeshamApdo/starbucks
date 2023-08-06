/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        moveRight: {
          "0%": {transform: "translateX(0)"},
          "50%": {transform: "translateX(10px)"},
          "100%": {transform: "translateX(0)"},
        },
      },
      animation: {
        moveRight : "moveRight 1s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
