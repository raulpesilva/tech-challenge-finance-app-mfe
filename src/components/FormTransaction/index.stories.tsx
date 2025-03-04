import { CreateTransactionResponse, UpdateTransactionResponse } from '@/actions/transactions';
import type { Meta, StoryObj } from '@storybook/react';
import { FormTransaction } from './index';

// Mock da função transactionAction
const mockTransactionAction = async (state: CreateTransactionResponse | UpdateTransactionResponse) => {
  return { ...state };
};

const meta: Meta<typeof FormTransaction> = {
  title: 'Forms/FormTransaction',
  component: FormTransaction,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormTransaction>;

export const Default: Story = {
  render: () => (
    <FormTransaction
      initialTransaction={{
        inputs: { type: undefined, value: undefined, dateIso: undefined, category: undefined, title: undefined },
        errors: {},
      }}
      transactionAction={mockTransactionAction}
    />
  ),
};

export const WithInitialType: Story = {
  render: () => (
    <FormTransaction
      type='transfer'
      initialTransaction={{
        inputs: { type: undefined, value: undefined, dateIso: undefined, category: undefined, title: undefined },
        errors: {},
      }}
      transactionAction={mockTransactionAction}
    />
  ),
};

export const EditTransactionWithAdvancedOptions: Story = {
  render: () => (
    <FormTransaction
      initialTransaction={{
        inputs: { type: 'deposit', value: '1000', dateIso: '2025-01-16', category: 'food', title: 'Almoço' },
        errors: {},
      }}
      transactionAction={mockTransactionAction}
    />
  ),
};

export const EditTransactionWithoutAdvancedOptions: Story = {
  render: () => (
    <FormTransaction
      initialTransaction={{
        inputs: { type: 'deposit', value: '1000', dateIso: '2025-01-16', category: '', title: 'Almoço' },
        errors: {},
      }}
      transactionAction={mockTransactionAction}
    />
  ),
};

export const WithErrors: Story = {
  render: () => (
    <FormTransaction
      initialTransaction={{
        inputs: { type: undefined, value: undefined, dateIso: undefined, category: undefined, title: undefined },
        errors: {
          type: ['Tipo inválido'],
          value: ['Valor é obrigatório'],
          date: ['Data é obrigatória'],
          title: ['Título é obrigatório'],
        },
      }}
      transactionAction={mockTransactionAction}
    />
  ),
};
