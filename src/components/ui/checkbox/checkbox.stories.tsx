import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const UncheckedAndDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const Controlled: Story = {
  render: args => {
    const [check, setCheck] = useState<boolean>(false)

    return <Checkbox {...args} checked={check} onValueChange={setCheck} />
  },
}

export const CheckedWithText: Story = {
  args: {
    checked: true,
    label: 'CheckBox',
  },
}

export const UncheckedWithText: Story = {
  args: {
    checked: false,
    label: 'CheckBox',
  },
}

export const CheckedAndDisabledWithText: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'CheckBox',
  },
}

export const UncheckedAndDisabledWithText: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'CheckBox',
  },
}

export const ControlledWithText: Story = {
  render: args => {
    const [check, setCheck] = useState<boolean>(false)

    return <Checkbox {...args} checked={check} onValueChange={setCheck} label={'CheckBox'} />
  },
}
