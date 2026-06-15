import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Image Optimization
  },
  basePath: '', // Set to '/ai-portfolio' if deploying to a subdirectory
  trailingSlash: true, // Important for GitHub Pages routing
};

export default nextConfig;
