import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    children: 'Heading 1 - Font size 24px',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'heading2',
    children: 'Heading 2 - Font size 20px',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'heading3',
    children: 'Heading 3 - Font size 18px',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'heading4',
    children: 'Heading 4 - Font size 16px',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'paragraph',
    children: 'Paragraph - Font size 16px',
  },
};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Label - Font size 16px',
  },
};

export const Span: Story = {
  args: {
    variant: 'span',
    children: 'Span - Font size 14px',
  },
};

export const TextSmall: Story = {
  args: {
    variant: 'paragraph',
    size: 'xs',
    children: 'Text Small - Font size 12px',
  },
};

export const TextLarge: Story = {
  args: {
    variant: 'paragraph',
    size: '3xl',
    children: 'Text Large - Font size 28px',
  },
};

export const TextXLarge: Story = {
  args: {
    variant: 'paragraph',
    size: '4xl',
    children: 'Text XLarge - Font size 32px',
  },
};

export const TextBold: Story = {
  args: {
    variant: 'paragraph',
    weight: 'bold',
    children: 'Text Bold',
  },
};

export const TextSemiBold: Story = {
  args: {
    variant: 'paragraph',
    weight: 'semiBold',
    children: 'Text SemiBold',
  },
};

export const ColorTertiary: Story = {
  args: {
    children: 'Text custom color',
    color: 'tertiary',
  },
};

export const ColorError: Story = {
  args: {
    children: 'Text custom color',
    color: 'error',
  },
};
