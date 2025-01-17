import type { Meta, StoryObj } from '@storybook/react';
import { GoBackButton } from './index';

const meta: Meta<typeof GoBackButton> = {
  title: 'Components/GoBackButton',
  component: GoBackButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof GoBackButton>;

export const Default: Story = {
  render: () => <GoBackButton />,
};
