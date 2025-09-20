import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable TypeScript validation during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure output tracing root to fix the warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;