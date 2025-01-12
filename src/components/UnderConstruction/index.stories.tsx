import type { Meta, StoryObj } from '@storybook/react';
import { UnderConstruction } from './index';

const meta: Meta<typeof UnderConstruction> = {
  title: 'Components/UnderConstruction',
  component: UnderConstruction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof UnderConstruction>;

export const PageUnderConstruction: Story = {
  render: () => <UnderConstruction />,
};

export const ServiceUnderConstruction: Story = {
  render: () => <UnderConstruction service />,
};
