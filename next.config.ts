import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features
  experimental: {
    turbo: {},
  },
  // Production source maps for debugging
  productionBrowserSourceMaps: true,
};

export default nextConfig;
