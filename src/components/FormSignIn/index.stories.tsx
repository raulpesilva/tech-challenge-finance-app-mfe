import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FormSignIn } from './index';

const meta: Meta<typeof FormSignIn> = {
  title: 'Forms/FormSignIn',
  component: FormSignIn,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormSignIn>;

export const Default: Story = {
  render: () => <FormSignIn signIn={fn()} />,
};
