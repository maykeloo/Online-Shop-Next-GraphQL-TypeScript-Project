/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://online-shop-85o1q5se3-maykeloo.vercel.app/:path*',
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://online-shop-85o1q5se3-maykeloo.vercel.app'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
