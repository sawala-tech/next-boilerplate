import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: {
    position: 'bottom-right'
  },
  allowedDevOrigins: ['http://localhost:3000', 'http://localhost:1337'],
  env: {
    SITE_NAME: 'Plan Donation App',
    APP_URL: process.env.APP_URL,
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  },
  images: {},
  experimental: {
    webpackMemoryOptimizations: process.env.NODE_ENV === 'development' ? true : false
  },
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined
}

export default nextConfig
