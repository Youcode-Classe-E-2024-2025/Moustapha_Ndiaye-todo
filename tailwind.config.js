/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors : {
        'main-color' : '#048B9A' ,
        'secondary-color' : '#D9D9D9'
      },
      fontFamily : {
        'robot' : ['Roboto', 'sans serif'],
        'DancingScript' : ['cursive'],
      },
    },
  },
  plugins: [],
}




