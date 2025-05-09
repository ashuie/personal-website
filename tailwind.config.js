/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables class-based dark mode
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
    plugins: [],
 };