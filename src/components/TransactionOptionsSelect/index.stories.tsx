import type { Meta, StoryObj } from '@storybook/react';
import { TransactionOptionsSelect } from './index';

const meta: Meta<typeof TransactionOptionsSelect> = {
  title: 'Components/TransactionOptionsSelect',
  component: TransactionOptionsSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TransactionOptionsSelect>;

export const Default: Story = {
  render: () => <TransactionOptionsSelect />,
};

export const WithInitialType: Story = {
  render: () => <TransactionOptionsSelect type='Transferência' />,
};
