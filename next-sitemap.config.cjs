// next-sitemap.config.cjs
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru',
  changefreq: 'monthly',
  priority: 0.7,
  generateRobotsTxt: true,
  // exclude: ['/secret'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ]
  }
}
