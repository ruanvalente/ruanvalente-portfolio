/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
