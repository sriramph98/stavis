/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

