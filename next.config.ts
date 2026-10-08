import type { NextConfig } from "next";

const repoBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
