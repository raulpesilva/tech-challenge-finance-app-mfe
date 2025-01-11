import type { StorybookConfig } from '@storybook/nextjs';
import type { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config: Configuration) => {
    if (!config.module?.rules) config.module = { rules: [] };

    const fileLoaderRule = config.module.rules?.find(
      (rule) =>
        rule && typeof rule === 'object' && 'test' in rule && rule.test instanceof RegExp && rule.test.test('.svg')
    );

    if (fileLoaderRule && typeof fileLoaderRule === 'object') fileLoaderRule.exclude = /\.svg$/;

    config.module.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true },
        },
      ],
    });

    return config;
  },
  staticDirs: ['../public'],
  features: {
    experimentalRSC: true,
  },
};

export default config;
