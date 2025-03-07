import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] as const;

export const Primary: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    value: null,
    onChange: (option) => console.log('Selected:', option),
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    value: null,
    onChange: (option) => console.log('Selected:', option),
    label: 'Select with Label',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    value: 'Option 2',
    onChange: (option) => console.log('Selected:', option),
    label: 'Select with Default Value',
  },
};

export const PrimaryColor: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    value: null,
    onChange: (option) => console.log('Selected:', option),
    label: 'Select with Label',
    color: 'primary',
  },
};

export const SecondaryColor: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    value: null,
    onChange: (option) => console.log('Selected:', option),
    label: 'Select with Label',
    color: 'secondary',
  },
};
