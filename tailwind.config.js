/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title': '48px',
        'title2': '26px',
      },
      boxShadow:{
        'normal': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        aldrich: ['Aldrich', 'sans-serif'],
      },
    },
  },
  plugins: [],
}