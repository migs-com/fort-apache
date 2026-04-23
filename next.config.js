/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fortapache.ffe.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.notion.so',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/disciplines',
        destination: '/activites',
        permanent: true,
      },
      {
        source: '/cours-et-stages',
        destination: '/cours',
        permanent: true,
      },
      {
        source: '/cours-stages',
        destination: '/cours',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
