import type { Meta, StoryObj } from '@storybook/react';
import { MenuServicesApp } from './index';

const meta: Meta<typeof MenuServicesApp> = {
  title: 'Components/MenuServicesApp',
  component: MenuServicesApp,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MenuServicesApp>;

export const Default: Story = {
  render: () => <MenuServicesApp color='cta' colorActive='tertiary' />,
};

export const WithLinkActive: Story = {
  render: () => <MenuServicesApp color='cta' colorActive='tertiary' />,
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/dashboard/investments',
        query: {},
      },
    },
  },
};
