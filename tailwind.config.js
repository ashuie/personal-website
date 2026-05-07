/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      animation: {
        'draw-line': 'draw-line 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'draw-line': {
          from: { width: '0', opacity: '0' },
          to: { width: '100%', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(3deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1.5deg)' },
        },
      },
    },
  },
  plugins: [],
};
