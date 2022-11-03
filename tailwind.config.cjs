/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      cyan: {
        500: '#81D8F7',
        300: '#9BE1FB'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        // sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
