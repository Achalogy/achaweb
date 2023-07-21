/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://achalogy.dev/',
  generateRobotsTxt: true,
  exclude: [
    '/_next/*',
  ],
  robotsTxtOptions: {
    policies: [{
      userAgent: '*',
      allow: [
        '/',
        '/ads.txt'
      ],
      disallow: [
        '/_next/',
      ]
    }]
  }
}