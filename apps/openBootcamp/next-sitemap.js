/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://open-bootcamp.com',
  generateRobotsTxt: true,
  exclude: [
    '/politica-cookies',
    '/politica-privacidad',
    '/terminos-condiciones',
    '/profesor-informatica',
    '/oferta-junior',
    '/oferta-junior-java',
    '/angular-junior-barcelona'
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/oferta-junior$', '/oferta-junior-java$', '/angular-junior-barcelona$', '/junior-web-developest$'] }],
  },
};
