/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const REQUIRED_CONFIG = {
  reactStrictMode: true, // true | false
  env: {
    SITE_NAME: 'Sawala Boilerplate',
    BASE_URL: isProd ? 'http://localhost:3000' : 'http://localhost:3000'
  }
}

module.exports = REQUIRED_CONFIG
