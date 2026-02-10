/** @type {import('next').NextConfig} */
const path = require('path')
const isProd = true

const nextConfig = {
  distDir: 'docs',
  basePath: isProd ? '/profile' : '',
  assetPrefix: isProd ? '/profile/' : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;