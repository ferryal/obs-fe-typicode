/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
		NEXT_PUBLIC_BASE_AVATAR_URL: process.env.NEXT_PUBLIC_BASE_AVATAR_URL
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
