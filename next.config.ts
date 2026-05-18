import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL('https://*') // TODO: restrict before production for security
    ]
  },
  allowedDevOrigins: ['taushs-mac-studio.local']
};

export default nextConfig;
