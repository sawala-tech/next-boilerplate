const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      ...colors
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
