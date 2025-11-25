/** @type {import('next').NextConfig} */
const path = require('path')
const isProd = true

const nextConfig = {
  distDir: 'docs',
  basePath: isProd ? '/profile' : '',
  assetPrefix: isProd ? '/profile/' : '',
  output: 'export', // keep static export
  trailingSlash: true,
  images: {
    unoptimized: true, // disable image optimization for export
  },
  turbopack: {
    // ensure an absolute path to the project root
    root: path.resolve(__dirname),
  },
};

module.exports = nextConfig;