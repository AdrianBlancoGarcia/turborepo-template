/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://open-marketers.com',
  generateRobotsTxt: true,
  exclude: ['/politica-cookies', '/politica-privacidad', '/terminos-condiciones'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
