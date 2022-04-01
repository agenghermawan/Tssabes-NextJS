/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tssabes.my.id", "http://localhost:8000"],
  },
};

module.exports = nextConfig;
