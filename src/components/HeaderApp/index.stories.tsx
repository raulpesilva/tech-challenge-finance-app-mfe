import db from '@/mock/server/db.json';
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderApp } from './index';

const user = db.users[0];

const meta: Meta<typeof HeaderApp> = {
  title: 'Components/HeaderApp',
  component: HeaderApp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeaderApp>;

export const Default: Story = {
  render: () => <HeaderApp user={user}/>,
};
