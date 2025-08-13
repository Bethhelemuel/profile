/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: "/profile", // 👈 Repo name
  assetPrefix: "/profile/",
};

module.exports = nextConfig;
