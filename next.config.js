/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pub-4270cc2cbd0b47709feb53a0a8dc6023.r2.dev"]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
