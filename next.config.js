/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  reactStrictMode: false,
  images: {
    domains: ['fakestoreapi.com', 's3-alpha-sig.figma.com'],
  },
};

module.exports = nextConfig;
