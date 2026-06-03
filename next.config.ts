import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL('https://*') // TODO: restrict before production for security
    ]
  },
  allowedDevOrigins: [
    process.env.DEV_HOST!
  ]
};

export default nextConfig;
