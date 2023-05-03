/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "api-report.lsskincare.id",
      "images.unsplash.com"
    ],
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
