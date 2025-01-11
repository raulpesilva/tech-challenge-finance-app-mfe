import type { Meta, StoryObj } from '@storybook/react';
import { FormForgotPassword } from './index';

const meta: Meta<typeof FormForgotPassword> = {
  title: 'Components/FormForgotPassword',
  component: FormForgotPassword,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FormForgotPassword>;

export const Default: Story = {
  render: () => <FormForgotPassword />,
};
