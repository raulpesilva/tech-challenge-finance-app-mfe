import type { Meta, StoryObj } from '@storybook/react';
import { HeaderApp } from './index';

const meta: Meta<typeof HeaderApp> = {
  title: 'Components/HeaderApp',
  component: HeaderApp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeaderApp>;

export const Default: Story = {
  render: () => <HeaderApp />,
};
