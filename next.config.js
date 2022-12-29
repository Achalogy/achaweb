const { withAxiom } = require('next-axiom');
/** @type {import('next').NextConfig} */
const nextConfig = withAxiom({
  reactStrictMode: true,
  images: {
    domains: [
      "i.ytimg.com"
    ]
  }
})

module.exports = nextConfig
