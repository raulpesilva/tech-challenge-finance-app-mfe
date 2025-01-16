import { UpdateUserResponse } from '@/actions/user';
import type { Meta, StoryObj } from '@storybook/react';
import { FormAccount } from './index';

// Mock da função updateUser
const mockUpdateUser = async (state: UpdateUserResponse) => {
  return { ...state };
};

const meta: Meta<typeof FormAccount> = {
  title: 'Forms/FormAccount',
  component: FormAccount,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormAccount>;

export const Default: Story = {
  render: () => (
    <FormAccount
      updateUser={mockUpdateUser}
      initialUser={{ inputs: { name: 'Fulano', email: 'fulano@example.com', password: '' }, errors: {} }}
    />
  ),
};

export const FormWithErrors: Story = {
  render: () => (
    <FormAccount
      updateUser={mockUpdateUser}
      initialUser={{
        inputs: { name: '', email: '', password: '' },
        errors: { name: ['Nome é obrigatório'], email: ['E-mail é obrigatório'] },
      }}
    />
  ),
};
