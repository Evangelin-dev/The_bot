/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_BASE_URL: "http://localhost:8004",
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost", "egycraushoegeublvtjf.supabase.co"],
  },
};

export default nextConfig;
