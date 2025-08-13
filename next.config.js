/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Needed for static export
  basePath: isProd ? '/profile' : '', // Repo name for GitHub Pages
  assetPrefix: isProd ? '/profile/' : '', // Ensures assets load correctly
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true // Required when using static export for images
  },
};

module.exports = nextConfig;
