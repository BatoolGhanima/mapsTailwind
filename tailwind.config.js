/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          light : '#F5F7FA',
          default: '#4CAF4F',

        },
        customGray: {
          light : '#717171',
          default: '#4D4D4D',
          dark:'#263238'

        },
        

        fontFamily: {
          inter: ['Inter', 'sans-serif'], 
        },
        
      },
    },
  },
  plugins: [],
}
