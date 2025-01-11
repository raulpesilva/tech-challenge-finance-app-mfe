import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    id: 'default-checkbox',
    label: 'Checkbox text',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    id: 'default-checkbox',
    label: 'Checkbox text',
    color: 'secondary',
  },
};

export const Checked: Story = {
  args: {
    id: 'checked-checkbox',
    label: 'Checkbox text - checked',
    color: 'primary',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-checkbox',
    label: 'Checkbox text - disabled',
    color: 'primary',
    disabled: true,
  },
};
