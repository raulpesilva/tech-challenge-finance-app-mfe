import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './index';

const meta: Meta<typeof NavLink> = {
  title: 'UI/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    color: 'cta',
    colorActive: 'primary',
    href: '/dashboard/home',
    children: 'Nav Link',
  },
};

export const ActiveLink: Story = {
  args: {
    color: 'cta',
    colorActive: 'secondary',
    href: '/dashboard/test',
    children: 'Nav Link - Active',
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/dashboard/test',
        query: {},
      },
    },
  },
};
