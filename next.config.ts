import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional but recommended
  images: {
    domains: ["images.pexels.com"], // add any external image hosts here
  },
};

export default nextConfig;
