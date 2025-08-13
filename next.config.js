/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'docs', // changes the folder name from .next to next
  assetPrefix: './', // ensures relative paths for GitHub Pages
  output: 'export', // needed if you are using static export
};

module.exports = nextConfig;
