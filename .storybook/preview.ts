import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      default: 'light', // Define o fundo padrão
      values: [
        { name: 'light', value: '#ffffff' }, // Fundo branco
        { name: 'dark', value: '#333333' },  // Fundo escuro
        { name: 'gray', value: '#dadada' },  // Fundo cinza
      ],
    },
  },
};

export default preview;
