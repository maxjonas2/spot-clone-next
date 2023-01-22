/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
