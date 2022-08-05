/** @type {import('next').NextConfig} */

const path = require('path');
const withPreact = require('next-plugin-preact');
const CopyPlugin = require('copy-webpack-plugin');
const partytown = require('@builder.io/partytown/utils');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const ContentSecurityPolicy = `
  default-src 'self' jobrun.vercel.app jobrun-staging.vercel.app jobrun.dev *.jobrun.dev;
  script-src 'self' googletagmanager.com;
  img-src *;
  fonts-src 'self' fonts.googleapis.com fonts.gstatic.com;
 `;

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = {
  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    pathinfo: false,
  },
  mode: 'production',
  entry: {
    main: './pages/_app.tsx',
    styles: [
      './styles/global.css',
      '/styles/breadcrumb.module.css',
      '/styles/Drawer.module.css',
      '/styles/HeroButton.module.css',
      '/styles/Home.module.css',
      '/styles/Select.module.css',
      '/styles/StickyBanner.module.css',
      '/components/custom/HeaderOfertas/HeaderOfertas.module.css',
      '/components/custom/HeaderOfertas/Filters/FilterCommon.module.css',
      '/components/custom/HeaderOfertas/Filters/FilterExperiencia.module.css',
      '/components/custom/HeaderOfertas/Filters/FilterPuesto.module.css',
      '/components/custom/HeaderOfertas/Filters/FilterRegion.module.css',
      '/components/custom/HeaderOfertas/Filters/FilterTecnologias.module.css',
      '/components/plasmic/*',
    ],
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      { test: /\.tsx?$/, use: 'ts-loader' },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new FixStyleOnlyEntriesPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withPreact({
  swcMinify: true,
  reactStrictMode: true,
  experimental: { nextScriptWorkers: true, images: { allowFutureImage: true } },
  images: { domains: ['storage.googleapis.com'] },
  webpack: (config, { dir }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: partytown.libDirPath(),
            to: path.join(dir, 'public', '~partytown'),
          },
        ],
      })
    );
    return config;
  },
});
