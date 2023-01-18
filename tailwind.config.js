/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'movielio-red': '#BC1A45',
        'movielio-melon': '#FFD369',
        'movielio-grey': '#DDDDDD',
        'movielio-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}
