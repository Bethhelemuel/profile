/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/profile',          // your repo name here
  assetPrefix: '/profile/',      // trailing slash important
};

module.exports = nextConfig;
