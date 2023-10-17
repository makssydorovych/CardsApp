import { ComponentProps, FC, ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import { AnimatePresence } from 'framer-motion'

import s from './modal.module.scss'

import { Close } from '@/assets'

export type ModalSize = 'sm' | 'md' | 'lg'

export type ModalPropsType = {
  trigger?: ReactNode
  open: boolean
  onClose?: (open: boolean) => void
  showCloseButton?: boolean
  title?: string
  modalSize?: ModalSize
} & ComponentProps<'div'>

export const Modal: FC<ModalPropsType> = ({
  trigger,
  open = false,
  modalSize = 'md',
  title,
  className,
  onClose,
  children,
  showCloseButton = true,
}) => {
  // function handleModalClosed() {
  //   onClose?.()
  // }

  const contentClassName = getContentClassName(modalSize, className)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger style={{ cursor: 'pointer' }} asChild>
        {trigger}
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogPortal forceMount>
            <DialogOverlay>
              <div className={s.overlay}></div>
            </DialogOverlay>
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
      </AnimatePresence>
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
