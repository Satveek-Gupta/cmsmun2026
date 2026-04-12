import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.satveek.me",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
