import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.flairdocs.aligntogether.online",
        pathname: "/**", // ✅ Allow all paths
      },
      {
        protocol: "https",
        hostname: "xui.xea.temporary.site",
        pathname: "/**", // ✅ Allow all paths
      },
    ],
  },
};

export default nextConfig;