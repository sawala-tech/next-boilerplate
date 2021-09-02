const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may custumize your own custom color here
      ...colors
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
