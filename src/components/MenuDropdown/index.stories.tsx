import ExemploIcon from '@/assets/icons/menu-icon.svg';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuDropdown } from './index';

const meta: Meta<typeof MenuDropdown> = {
  title: 'Components/MenuDropdown',
  component: MenuDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof MenuDropdown>;

export const Contained: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='contained' color='primary'>
        <div>Menu Item</div>
      </MenuDropdown>
    );
  },
};

export const ContainedOpened: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='contained' color='primary'>
        <span>Menu Item</span>
      </MenuDropdown>
    );
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/dashboard',
        query: {
          'menu-account': 'true',
        },
      },
    },
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='outlined' color='secondary'>
        <div>Menu Item</div>
      </MenuDropdown>
    );
  },
};

export const OutlinedOpened: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='outlined' color='secondary'>
        <div>Menu Item</div>
      </MenuDropdown>
    );
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/dashboard',
        query: {
          'menu-account': 'true',
        },
      },
    },
  },
};

export const Text: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='text' color='tertiary'>
        <div>Menu Item</div>
      </MenuDropdown>
    );
  },
};

export const TextOpened: Story = {
  render: () => {
    return (
      <MenuDropdown param='menu-account' openIcon={<ExemploIcon />} variant='text' color='tertiary'>
        <div>Menu Item</div>
      </MenuDropdown>
    );
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/dashboard',
        query: {
          'menu-account': 'true',
        },
      },
    },
  },
};
