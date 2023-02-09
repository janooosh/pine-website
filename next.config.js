/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true
  },
    experimental: {
        scrollRestoration: true,
        images: {
          unoptimized: true,
        }
    },
}

module.exports = nextConfig