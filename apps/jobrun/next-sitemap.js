/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://jobrun.dev',
  generateRobotsTxt: true,
  exclude: ['/login', '/politica-de-cookies', '/politica-de-privacidad', '/terminos-y-condiciones'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
