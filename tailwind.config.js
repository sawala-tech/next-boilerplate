const colors = require('tailwindcss/colors')

delete colors?.lightBlue
delete colors?.warmGray
delete colors?.trueGray
delete colors?.coolGray
delete colors?.blueGray

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  media: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      ...colors
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
