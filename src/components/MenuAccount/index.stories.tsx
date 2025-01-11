import type { Meta, StoryObj } from '@storybook/react';
import { MenuAccount } from './index';

const meta: Meta<typeof MenuAccount> = {
  title: 'Components/MenuAccount',
  component: MenuAccount,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MenuAccount>;

export const Default: Story = {
  render: () => <MenuAccount />,
};
