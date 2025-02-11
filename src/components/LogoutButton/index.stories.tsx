import type { Meta, StoryObj } from '@storybook/react';
import { LogoutButton } from './index';

const meta: Meta<typeof LogoutButton> = {
  title: 'Components/LogoutButton',
  component: LogoutButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  render: () => <LogoutButton />,
};
