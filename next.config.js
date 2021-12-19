/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "unsplash.com",
      "images.unsplash.com",
      "github.com",
      "lh3.googleusercontent.com",
      "plantes.s3.sa-east-1.amazonaws.com",
      "unsplash.it",
      "platform-lookaside.fbsbx.com",
      "suasplantas.s3.sa-east-1.amazonaws.com",
      "plantei-dev.s3.sa-east-1.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/plants",
        destination: "/",
        permanent: true,
      },
      {
        source: "/me",
        destination: "/users/me",
        permanent: true,
      },
    ];
  },
};
