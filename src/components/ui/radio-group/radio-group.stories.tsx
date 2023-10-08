import { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radio-group/radio-group.tsx'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { title: 'Option One', value: 'one' },
      { title: 'Option Two', value: 'two' },
      { title: 'Option Three', value: 'three' },
      { title: 'Option Four', value: 'four' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    options: [
      { title: 'Option One', value: 'one' },
      { title: 'Option Two', value: 'two' },
      { title: 'Option Three', value: 'three' },
      { title: 'Option Four', value: 'four' },
    ],
    disabled: true,
  },
}
