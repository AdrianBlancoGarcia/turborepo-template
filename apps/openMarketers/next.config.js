/** @type {import('next').NextConfig} */

const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: ['site-assets.plasmic.app', 'empresas.blogthinkbig.com', 'us.123rf.com'],
  },

  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://campus.open-marketers.com/login',
        statusCode: 301,
      },
      {
        source: '/register',
        destination: 'https://campus.open-marketers.com/register',
        statusCode: 302,
      },
    ];
  },
});
