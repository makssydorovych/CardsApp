import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'

import { RecoveryPassword } from '@/components/auth'

const meta = {
  title: 'Auth/RecoveryPassword',
  component: RecoveryPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof RecoveryPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
}
