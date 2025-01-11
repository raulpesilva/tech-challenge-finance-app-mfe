import type { Meta, StoryObj } from '@storybook/react';
import { MenuServices } from './index';

const meta: Meta<typeof MenuServices> = {
  title: 'Components/MenuServices',
  component: MenuServices,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuServices>;

export const Default: Story = {
  render: () => {
    return <MenuServices />;
  },
};

export const MenuOpenedMobile: Story = {
  render: () => {
    return <MenuServices />;
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/',
        query: {
          services: 'true',
        },
      },
    },
  },
};
