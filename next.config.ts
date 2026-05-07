import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  trailingSlash: true, // ✅ ADD THIS

  images: {
    domains: ["images.pexels.com"],
    unoptimized: true, // disable Image Optimization for static export
  },

  output: "export", // required for S3 / static hosting
};

export default nextConfig;
