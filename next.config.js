/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  env: {
    STRAPI_API_ENDPOINT: process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
