import type { Meta, StoryObj } from '@storybook/react';
import { CategoriesOptionsSelect } from './index';

const meta: Meta<typeof CategoriesOptionsSelect> = {
  title: 'Components/CategoriesOptionsSelect',
  component: CategoriesOptionsSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CategoriesOptionsSelect>;

export const Default: Story = {
  render: () => <CategoriesOptionsSelect />,
};

export const WithInitialType: Story = {
  render: () => <CategoriesOptionsSelect type='Outros Gastos' />,
};
