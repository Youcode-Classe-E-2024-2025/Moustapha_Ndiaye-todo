/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors : {
        'main-color' : '#048B9A' ,
      },
      fontFamily : {
        'robot' : ['Roboto', 'sans serif'],
        'DancingScript' : ['cursive'],
      },
    },
  },
  plugins: [],
}




