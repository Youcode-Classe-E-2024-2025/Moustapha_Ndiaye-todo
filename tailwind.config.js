/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/script/*.{js}','./*.html'],
  
  theme: {
    extend: {
      colors : {
        'main-color' : '#048B9A' ,
        'secondary-color' : '#D9D9D9'
      },
      fontFamily : {
        'DancingScript' : ['cursive'],
      },
    },
  },
  plugins: [],
}




