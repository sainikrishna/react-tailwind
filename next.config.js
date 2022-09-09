/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'uploads-ssl.webflow.com',
    ],
  },
  "images.unoptimized": true
}

module.exports = nextConfig
