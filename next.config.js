/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript support
  typescript: {
    // Ignore type errors during build (temporary solution)
    ignoreBuildErrors: true,
  },
  // Enable ESLint support
  eslint: {
    // Ignore ESLint errors during build (temporary solution)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;