/** @type {import('next').NextConfig} */
const isProd = true

const nextConfig = {
  distDir: 'docs',            // build output goes to 'docs' so GitHub Pages can serve it
  basePath: isProd ? '/profile' : '',  // all routes start with /profile in production
  assetPrefix: isProd ? '/profile/' : '', // tells Next.js to load _next assets from /profile/_next
  output: 'export',           // for static HTML export
  trailingSlash: true,        // important for GitHub Pages to handle nested routes
};

module.exports = nextConfig;
