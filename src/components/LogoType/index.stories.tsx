import type { Meta, StoryObj } from '@storybook/react';
import { LogoType } from './index';

const meta: Meta<typeof LogoType> = {
  title: 'Components/LogoType',
  component: LogoType,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LogoType>;

export const Default: Story = {
  render: () => <LogoType />,
};
