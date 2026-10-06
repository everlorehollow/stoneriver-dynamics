import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/altadena",
        destination: "/#altadena",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
