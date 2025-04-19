/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'd3wo5wojvuv7l.cloudfront.net',
        },
        {
          protocol: 'https',
          hostname: "api.wokpa.app",
        },
        {
            protocol: 'https',
            hostname: 'wokpa.s3.amazonaws.com',
          },
      ],
    },
  };

export default nextConfig;
