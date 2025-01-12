import type { Meta, StoryObj } from '@storybook/react';
import { InvestmentCard } from './index';

const meta: Meta<typeof InvestmentCard> = {
  title: 'Components/InvestmentCard',
  component: InvestmentCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof InvestmentCard>;

export const Default: Story = {
  render: () => <InvestmentCard title='Renda Fixa' value='R$ 36.000,00' />,
};

export const WithDifferentValue: Story = {
  render: () => <InvestmentCard title='Renda Variável' value='R$ 14.000,00' />,
};
