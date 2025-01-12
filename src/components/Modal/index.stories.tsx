import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './index';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <p>Location where the modal content should be inserted...</p>
    </Modal>
  ),
};
