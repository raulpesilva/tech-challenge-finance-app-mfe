import db from '@/mock/server/db.json';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtractSummary } from './index';

const user = db.users[0];

const meta: Meta<typeof ExtractSummary> = {
  title: 'Components/ExtractSummary',
  component: ExtractSummary,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ExtractSummary>;

export const Default: Story = {
  render: () => <ExtractSummary user={user} />,
};
