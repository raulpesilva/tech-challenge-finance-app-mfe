import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  assetPrefix: 'https://tech-challenge-finance-app.vercel.app',
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
