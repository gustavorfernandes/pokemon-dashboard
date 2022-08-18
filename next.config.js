/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/200',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
