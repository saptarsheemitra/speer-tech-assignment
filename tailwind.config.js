/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    
    colors: {
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
      pink: colors.pink,
      rose: colors.rose,
      purple: colors.purple,
      cyan: colors.cyan,
      lime: colors.lime,
      blue: colors.blue,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    screens: {
      iphone: '412px',
      ...defaultTheme.screens
    }
  },
};