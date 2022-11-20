/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      blue: colors.blue,
      primary: 'hsl(180, 29%, 50%)',
      background: 'hsl(180, 52%, 96%)',
      lightGrayishCyan: 'hsl(180, 31%, 95%)',
      darkGrayishCyan: 'hsl(180, 8%, 52%)',
      veryDarkGrayishCyan: 'hsl(180, 14%, 20%)'
    },
    extend: {},
  },
  plugins: [],
}
