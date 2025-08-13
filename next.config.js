/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,           // ensures URLs end with /
  basePath: '/profile',          // your GitHub repo name
  assetPrefix: './',             // relative path for _next assets
};
module.exports = nextConfig;
