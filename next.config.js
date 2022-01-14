/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [withPWA, withBundleAnalyzer],
  {
    reactStrictMode: true,
    images: {
      domains: [
        'unsplash.com',
        'images.unsplash.com',
        'github.com',
        'lh3.googleusercontent.com',
        'plantes.s3.sa-east-1.amazonaws.com',
        'unsplash.it',
        'platform-lookaside.fbsbx.com',
        'suasplantas.s3.sa-east-1.amazonaws.com',
        'plantei-dev.s3.sa-east-1.amazonaws.com',
      ],
    },
    async redirects() {
      return [
        {
          source: '/plants',
          destination: '/',
          permanent: true,
        },
      ];
    },
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  },
);
