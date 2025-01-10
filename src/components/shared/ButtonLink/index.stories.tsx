import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from './index';

const meta = {
  title: 'UI/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    href: '#',
    children: 'Button Link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    href: '#',
    children: 'Button Link',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    href: '#',
    children: 'Button Link',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    href: '#',
    children: 'Button Link',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    href: '#',
    children: 'Button Link',
  },
};

export const Selected: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    href: '#',
    children: 'Button Link',
    selected: true,
  },
};
