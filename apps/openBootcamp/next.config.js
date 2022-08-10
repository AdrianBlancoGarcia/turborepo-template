/** @type {import('next').NextConfig} */

const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  swcMinify: true,
  reactStrictMode: true,
  experimental: { nextScriptWorkers: true },
  images: { domains: ['site-assets.plasmic.app', 'ob-seoapi.onrender.com', 'storage.googleapis.com', 'png.pngtree.com'] },
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://campus.open-bootcamp.com/login',
        statusCode: 301,
      },
      {
        source: '/register',
        destination: 'https://campus.open-bootcamp.com/register',
        statusCode: 302,
      },
      {
        source: '/fullstack',
        destination: '/full-stack',
        statusCode: 301,
      },
    ];
  },
});
