import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundContainer } from './index';

const meta: Meta<typeof NotFoundContainer> = {
  title: 'Components/NotFoundContainer',
  component: NotFoundContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof NotFoundContainer>;

export const Default: Story = {
  render: () => <NotFoundContainer />,
};
