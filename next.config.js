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
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: () => {
      return "http://127.0.0.1:8000";
    }
  }
};

module.exports = nextConfig;
