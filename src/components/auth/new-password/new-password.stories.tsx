import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './new-password.tsx'

const meta = {
  title: 'Auth/NewPassword',
  component: NewPassword,
  tags: ['autodocs'],
  argTypes: { onSubmit: { action: 'clicked' } },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
}
