import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    page: {
      description: 'Número da página atual.',
    },
    itemsPerPage: {
      description: 'Quantidade de itens que serão renderizados por página.',
    },
    totalItems: {
      description: 'Total de itens retornados da API, incluindo o primeiro item da próxima página.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  render: () => <Pagination page={1} itemsPerPage={10} totalItems={11} />,
};

export const MiddlePage: Story = {
  render: () => <Pagination page={2} itemsPerPage={10} totalItems={11} />,
};

export const LastPage: Story = {
  render: () => <Pagination page={3} itemsPerPage={10} totalItems={1} />,
};
