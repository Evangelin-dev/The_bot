/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_BASE_URL: "http://localhost:8004",
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost", "egycraushoegeublvtjf.supabase.co"],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM *',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *;", 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
