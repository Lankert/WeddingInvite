const { isPrimary } = require('node:cluster');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      'primary': '#7a8a6f',
      'secondary': '#adb492',
      'base': '#f9ead7',

    extend: {},
  },
  plugins: [],
}
}
