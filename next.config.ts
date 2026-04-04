import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "registry.npmmirror.com",
      "raw.githubusercontent.com",
      "ui.shadcn.com",
    ],
  },
};

export default nextConfig;
