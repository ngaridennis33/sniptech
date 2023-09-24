/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Add external domains to the config
  images: {
    domains: ["images.pexels.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
