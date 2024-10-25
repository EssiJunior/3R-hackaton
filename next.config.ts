import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: "www.cameroon-tribune.cm",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "enact-africa.s3.amazonaws.com",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "www.greenpeace.org",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "cdn.unenvironment.org",
        port: '',
      },
    ],
  },
};

export default nextConfig;
