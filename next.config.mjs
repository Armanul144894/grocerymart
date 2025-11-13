/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://images.unsplash.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
