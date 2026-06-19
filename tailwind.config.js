const { colors } = require('./src/config/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {

      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },

      colors: {
        ...colors,
      },

      maxWidth: {
        container: '1440px',
      },

      backdropBlur: {
        glass: '20px',
      },
    },
  },

  plugins: [],
};