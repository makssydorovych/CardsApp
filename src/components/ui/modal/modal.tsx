import { ComponentProps, FC } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogTitle,
} from '@radix-ui/react-dialog'

import s from './modal.module.scss'

import { Close } from '@/assets'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalPropsType = {
  open: boolean
  onClose?: () => void
  showCloseButton?: boolean
  title?: string
  modalSize?: ModalSize
} & ComponentProps<'div'>

export const Modal: FC<ModalPropsType> = ({
  open = false,
  modalSize = 'md',
  title,
  className,
  onClose,
  children,
  showCloseButton = true,
}) => {
  function handleModalClosed() {
    onClose?.()
  }

  const contentClassName = getContentClassName(modalSize, className)

  return (
    <Dialog open={open} onOpenChange={handleModalClosed}>
      {open && (
        <DialogPortal forceMount>
          <DialogOverlay></DialogOverlay>
          <DialogContent className={contentClassName}>
            <div className={s.header}>
              <DialogTitle asChild>
                <h2 className={s.title}>{title}</h2>
              </DialogTitle>
              {showCloseButton && (
                <DialogClose className={s.closeButton}>
                  <Close />
                </DialogClose>
              )}
            </div>
            <div className={s.contentBox}>{children}</div>
          </DialogContent>
        </DialogPortal>
      )}
    </Dialog>
  )
}

function getContentClassName(size: ModalSize, className?: string) {
  const sizeClassName = getSizeClassName(size)

  return [className, s.content, sizeClassName].filter(Boolean).join(' ')
}

function getSizeClassName(size: ModalSize) {
  if (size === 'sm') return s.sm
  if (size === 'md') return s.md
  if (size === 'lg') return s.lg
}
