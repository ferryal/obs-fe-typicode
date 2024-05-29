/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  async rewrites() {
    return [
			{
				source: '/:path*',
				destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`,
				basePath: false,
      }
    ];
  }
};

export default nextConfig;
