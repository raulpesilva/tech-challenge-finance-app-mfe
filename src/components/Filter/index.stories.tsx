'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from './index';

const meta = {
  title: 'Components/Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  render: () => <Filter />,
};
