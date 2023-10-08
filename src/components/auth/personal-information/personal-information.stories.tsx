import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from './'

const meta = {
  title: 'Profile/Personal information',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

type Story = StoryObj<typeof meta>

export default meta
export const Default: Story = {
  args: {
    email: 'example@doemail.com',
    avatar:
      'https://fastly.picsum.photos/id/819/200/200.jpg?hmac=nCwO4yKGbs8354aS0yf974UlPFBF_gwUSNazar7yBhk',
    name: 'New Name',
    onNameChange: action('onChange'),
    onLogout: action('Logout'),
    onAvatarChange: action('onChange'),
  },
  render: ({ onNameChange, onAvatarChange, onLogout, email, avatar }) => {
    const [name, setName] = useState('New Name')

    const handleNameChange = (newName: string) => {
      onNameChange(newName)
      setName(newName)
    }

    return (
      <PersonalInformation
        email={email}
        avatar={avatar}
        name={name}
        onAvatarChange={onAvatarChange}
        onNameChange={handleNameChange}
        onLogout={onLogout}
      />
    )
  },
}
