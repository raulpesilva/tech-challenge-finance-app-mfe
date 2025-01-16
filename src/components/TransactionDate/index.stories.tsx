import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { TransactionDate } from './index';

const meta: Meta<typeof TransactionDate> = {
  title: 'Components/TransactionDate',
  component: TransactionDate,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TransactionDate>;

export const Default: Story = {
  render: () => <TransactionDate initialDate={null} />,
};

export const WithInitialDate: Story = {
  render: () => <TransactionDate initialDate={dayjs('2025-01-16')} />,
};
