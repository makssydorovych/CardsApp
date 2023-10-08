import { Meta, StoryObj } from '@storybook/react'

import { Edit, Logout, PersonOutline, PlayArrow, Trash } from '@/assets'
import { Avatar } from '@/components/avatar'
import { Dropdown } from '@/components/ui/dropdown/dropdown.tsx'
import { DropdownItem } from '@/components/ui/dropdown/dropdownItem'
import { DropdownItemWithIcon } from '@/components/ui/dropdown/dropdownItem/dropdownItemWithIcon.tsx'
import { Typography } from '@/components/ui/typography'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: <Edit />,
    children: (
      <>
        <DropdownItemWithIcon icon={<PlayArrow />} text="Learn" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Edit />} text="Edit" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Trash />} text="Delete" onSelect={() => {}} />
      </>
    ),
  },
}
export const PersonalInfoDropdown: Story = {
  args: {
    trigger: (
      <button
        style={{
          padding: '0',
          background: 'unset',
          border: 'none',
          borderRadius: '50%',
        }}
      >
        <Avatar
          src={
            'https://fastly.picsum.photos/id/819/200/200.jpg?hmac=nCwO4yKGbs8354aS0yf974UlPFBF_gwUSNazar7yBhk'
          }
          size={60}
        />
      </button>
    ),
    align: 'end',

    children: (
      <>
        <DropdownItem>
          {' '}
          <Avatar
            src={
              'https://fastly.picsum.photos/id/819/200/200.jpg?hmac=nCwO4yKGbs8354aS0yf974UlPFBF_gwUSNazar7yBhk'
            }
            size={36}
          />
          <div>
            <Typography variant="large">John</Typography>
            <Typography variant="caption" style={{ color: 'var(--color-dark-100)' }}>
              example@email.com
            </Typography>
          </div>
        </DropdownItem>
        <DropdownItemWithIcon icon={<PersonOutline />} text="My Profile" onSelect={() => {}} />
        <DropdownItemWithIcon icon={<Logout />} text="Sign Out" onSelect={() => {}} />
      </>
    ),
  },
}
