import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FormSignUp } from './index';

const meta: Meta<typeof FormSignUp> = {
  title: 'Forms/FormSignUp',
  component: FormSignUp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormSignUp>;

export const Default: Story = {
  render: () => <FormSignUp signUp={fn()} />,
};
