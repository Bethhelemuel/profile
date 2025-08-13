/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/profile",      // Keep this if your repo is github.com/USERNAME/profile
  output: "export",          // Required for static export
  trailingSlash: true,       // Ensures paths end with / for GitHub Pages
};

module.exports = nextConfig;
