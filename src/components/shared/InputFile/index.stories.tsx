import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './index';

const meta = {
  title: 'UI/InputFile',
  component: InputFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputFile>;

export default meta;

type Story = StoryObj<typeof InputFile>;

export const Default: Story = {
  args: {
    id: 'file',
    name: 'attachment',
    label: 'Anexo',
    onInput: (file) => console.log('Arquivo selecionado:', file),
  },
};
