import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fps.cdnpk.net'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
