import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/mobile-notary-apostille-san-marino",
        destination: "/mobile-notary-apostille-los-angeles-ca",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
