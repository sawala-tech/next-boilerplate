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
      primary: '#DC2626',
      secondary: '#003366',
      tertiary: '#F8CA0F',
      light: '#EFEFEF',
      black: '#101928',
      white: '#fff',
      ...colors
    }
  },
  plugins: [require('tailwind-filter-utilities')]
}
