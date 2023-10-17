import { useState } from 'react'

import { Modal } from '@/components/ui/modal'
import { DeckForm, DeckProps } from '@/pages/decks/add-deck'

export const EditDeck = ({ trigger, buttonTitle, values, onSubmit }: DeckProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <Modal trigger={trigger} open={open} onClose={setOpen} title="Edit Deck">
      <DeckForm
        buttonTitle={buttonTitle}
        values={values}
        onSubmit={onSubmit}
        onClose={closeModal}
      />
    </Modal>
  )
}
