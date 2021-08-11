const colors = require('tailwindcss/colors')

delete colors?.lightBlue

module.exports = {
  purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      // You may custumize your own custom color here
      ...colors
    },
    extend: {
      borderRadius: ['first', 'last'],
      backgroundImage: (theme) => ({
        'primary-gradient': 'linear-gradient(180deg, #E72683 0%, #DC1173 100%);'
      }),
      transitionDelay: {
        400: '400ms'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-filter-utilities')]
}
