/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#6016FC',
      dark: '#0B0B22',
      green: '#16FCD2',
      highlight: '#221048',
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      current: colors.current,
      inherit: colors.inherit,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
};
