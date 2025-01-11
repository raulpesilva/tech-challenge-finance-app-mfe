import type { Meta, StoryObj } from '@storybook/react';
import { CreditCard } from './index';

const meta: Meta<typeof CreditCard> = {
  title: 'Components/CreditCard',
  component: CreditCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreditCard>;

export const PhysicalCard: Story = {
  render: () => <CreditCard type='physical' cardNumber='**** **** **** 1234' cardFunction='Débito/Crédito' />,
};

export const VirtualCard: Story = {
  render: () => <CreditCard type='virtual' cardNumber='**** **** **** 6789' cardFunction='Débito' />,
};

