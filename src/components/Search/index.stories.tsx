import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './index';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: () => <Search />,
};
