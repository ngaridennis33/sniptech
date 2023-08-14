/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const nextConfig = {
  // Add external domains to the config
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
