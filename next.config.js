/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "spot-clone-next.vercel.app",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
