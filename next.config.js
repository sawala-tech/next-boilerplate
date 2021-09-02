/**
 * @type {import('next').NextConfig}
 */

const withOptimizedImages = require('next-optimized-images')
const isProd = process.env.NODE_ENV === 'production'

const REQUIRED_CONFIG = {
  reactStrictMode: true, // true | false
  env: {
    SITE_NAME: 'Sawala Boilerplate',
    BASE_URL: isProd ? 'http://localhost:3000' : 'http://localhost:3000'
  }
}
const REST_CONFIG = {
  // add another config here
}
const OPTIMIZED_IMAGES_CONFIG = {
  removeOriginalExtension: true,
  imagesName: '[name]-[hash].[ext]',
  imagesFolder: 'optimized',
  handleImages: ['jpeg', 'png', 'svg', 'webp'],
  optimizeImages: true,
  responsive: {
    adapter: require('responsive-loader/sharp')
  }
}
const BUNDLE = withOptimizedImages({ ...REQUIRED_CONFIG }, { ...REST_CONFIG }, { ...OPTIMIZED_IMAGES_CONFIG })
module.exports = BUNDLE
