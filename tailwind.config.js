/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js,css}"],
  theme: {
    extend: {
      colors:
      {
        'brandBlue': '#243c5a',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}


  