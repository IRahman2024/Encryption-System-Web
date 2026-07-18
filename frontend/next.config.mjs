/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://127.0.0.1:8000/:path*',
        destination: 'https://encryption-system-web-1.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;