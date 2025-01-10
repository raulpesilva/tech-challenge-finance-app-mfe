import ExemploIcon from '@/assets/icons/edit-icon.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Default Input',
    placeholder: 'Type here...',
  },
};

export const CenteredText: Story = {
  args: {
    id: 'centered-input',
    label: 'Centered Input',
    placeholder: 'Type here...',
    textAlign: 'center',
  },
};

export const RightText: Story = {
  args: {
    id: 'centered-input',
    label: 'Centered Input',
    placeholder: 'Type here...',
    textAlign: 'right',
  },
};

export const WithIconLeft: Story = {
  args: {
    id: 'icon-left-input',
    label: 'Input with Left Icon',
    placeholder: 'Type here...',
    iconLeft: <ExemploIcon />,
  },
};

export const WithIconRight: Story = {
  args: {
    id: 'icon-right-input',
    label: 'Input with Right Icon',
    placeholder: 'Type here...',
    iconRight: <ExemploIcon />,
  },
};
