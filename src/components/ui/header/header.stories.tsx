import { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/ui/header/header.tsx'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
