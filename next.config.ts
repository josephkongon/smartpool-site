import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` writes plain HTML/CSS/JS to `out/`,
  // which can be hosted on any static file host. No Node server, no database.
  output: "export",
  images: {
    // The default image optimizer needs a server, so it is off for static export.
    unoptimized: true,
  },
  experimental: {
    // Pages live under app/[lang] (one root layout per language), so the 404
    // page is a standalone document: app/global-not-found.tsx.
    globalNotFound: true,
  },
};

export default nextConfig;
