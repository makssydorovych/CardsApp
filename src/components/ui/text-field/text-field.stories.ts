import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Placeholder',
  },
}

export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Password',
    type: 'password',
  },
}
export const Search: Story = {
  args: {
    label: 'Input search',
    placeholder: 'Search',
    type: 'search',
    isSearch: true,
  },
}
export const Error: Story = {
  args: {
    label: 'Input error',
    value: 'Wrong value',
    errorMessage: 'Error message',
  },
}
export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    value: 'Disabled',
    isDisabled: true,
  },
}
