import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "img.jsdelivr.com",
      "registry.npmmirror.com",
      "raw.githubusercontent.com",
      "ui.shadcn.com",
    ],
  },
};

export default nextConfig;
