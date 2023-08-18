/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.icons8.com'],
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/api/:path*',
          },
        ];
      },
}

module.exports = nextConfig
