/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
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
    register: true,
    skipWaiting: true,
  },
});
