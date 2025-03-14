import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: 'http://localhost:3002',
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
