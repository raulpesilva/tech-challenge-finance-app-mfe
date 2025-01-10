import LoadingIcon from '@/assets/icons/loading-icon.svg';
import ExemploIcon from '@/assets/icons/logo-icon.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from './index';

const meta = {
  title: 'UI/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: <ExemploIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: <ExemploIcon />,
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: <ExemploIcon />,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: <ExemploIcon />,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: <ExemploIcon />,
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: <LoadingIcon />,
    loading: true,
  },
};

export const Selected: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: <ExemploIcon />,
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: <ExemploIcon />,
    disabled: true,
  },
};
