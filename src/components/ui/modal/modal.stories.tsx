import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Card } from '../card'
import { Typography } from '../typography'

import { Modal } from './'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const OpenModalWindow: Story = {
  args: {
    open: true,
    title: 'Hello',
    showCloseButton: false,
    children: (
      <>
        <Card>
          <Typography variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
            consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum
            laudantium modi molestias odio quas rem voluptatum. Dolores?
          </Typography>
          <Typography variant={'body2'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
            consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum
            laudantium modi molestias odio quas rem voluptatum. Dolores?
          </Typography>
          <span>
            {' '}
            <Button variant={'primary'} /> <Button variant={'tertiary'} />
          </span>
        </Card>
      </>
    ),
  },
}

export const OpeningModalWindow = {
  render: () => {
    const [open, setOpen] = useState(false)

    function handleModalClosed() {
      setOpen(false)
    }
    function handleModalOpened() {
      setOpen(true)
    }

    return (
      <>
        <span>
          <Button variant={'primary'} onClick={handleModalOpened}>
            Open Modal window
          </Button>
        </span>

        <Modal open={open} onClose={handleModalClosed} title={'Title'}>
          <Card>
            <Typography variant={'body1'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
              consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum
              laudantium modi molestias odio quas rem voluptatum. Dolores?
            </Typography>
            <Typography variant={'body2'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque blanditiis
              consequatur corporis culpa, eligendi et excepturi fugit iure laboriosam laborum
              laudantium modi molestias odio quas rem voluptatum. Dolores?
            </Typography>
          </Card>
          <Button variant={'primary'} />
        </Modal>
      </>
    )
  },
}
