import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboard/:path*',
        destination: '/dashboard/:path*', // Ensures Next.js handles internal routing
      },
    ];
  },
};

export default nextConfig;