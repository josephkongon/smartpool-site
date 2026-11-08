import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are plain <img> tags: public/ files or signed CloudFront URLs.
    unoptimized: true,
  },
  experimental: {
    // Pages live under app/[lang] (one root layout per language), so the 404
    // page is a standalone document: app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
