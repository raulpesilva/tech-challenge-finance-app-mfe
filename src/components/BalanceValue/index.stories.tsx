import type { Meta, StoryObj } from '@storybook/react';
import { BalanceValue } from './index';

const meta: Meta<typeof BalanceValue> = {
  title: 'Components/BalanceValue',
  component: BalanceValue,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BalanceValue>;

export const Default: Story = {
  render: () => <BalanceValue balance={100000} />,
};
