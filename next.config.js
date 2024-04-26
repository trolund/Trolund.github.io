const withPWA = require("next-pwa");
const withImages = require("next-images");

module.exports = withImages(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    pwa: {
      dest: "public",
      register: true,
      // skipWaiting: true,
      disable: process.env.NODE_ENV === "development"
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: ["trolund.vercel.app"],
    },
  })
);