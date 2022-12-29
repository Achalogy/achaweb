const { withAxiom } = require('next-axiom');
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */

const nextConfig = withAxiom({
  reactStrictMode: true,
  images: {
    domains: [
      "i.ytimg.com"
    ]
  },
  sentry: {
    hideSourceMaps: true
  }
})

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
