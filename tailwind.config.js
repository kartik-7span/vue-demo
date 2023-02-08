/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        title: ['Signika', 'sans-serif']
      },
      colors: {
        'orange': '#F36C21',
        'dark': '#222222',
        'gray': '#e7e7e7',
        'lightgreen': '#ECFDF5',
        'green': '#064E3B'
      },
      backgroundImage: {
        'GradientColor': 'linear-gradient(270deg, #272627 100%, rgba(34, 34, 34, 0) 69.19%)'
      },
    },
  },

  plugins: [],
}