/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#6016FC',
      dark: '#0B0B22',
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
};
