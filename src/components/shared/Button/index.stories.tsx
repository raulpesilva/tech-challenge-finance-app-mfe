import LoadingIcon from '@/assets/icons/loading-icon.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Text Button',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
    children: (
      <>
        Loading <LoadingIcon />
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Text Button',
    disabled: true,
  },
};
