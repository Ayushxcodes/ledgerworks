import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
    unoptimized: true, // 👈 disable Image Optimization
  },
  output: "export", // keep for static export
};

export default nextConfig;
