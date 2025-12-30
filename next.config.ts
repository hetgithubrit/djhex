import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    // @ts-ignore
    turbo: {
      rules: {
        "*.css": {
          loaders: ["postcss-loader"],
          as: "css",
        },
      },
    },
  },
};

export default nextConfig;
