import { useState } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import { Typography } from '../typography'

import s from './select.module.scss'

import { ArrowDown, ArrowUp } from '@/assets'

type Item = { value: string | number; label: string | number }

export type SelectProps = {
  variant?: 'default' | 'pagination'
  value: string | number
  onValueChange: (value: string) => void
  items: Item[]
  label?: string
  placeholder?: string
  disabled?: boolean
  className?: string
}

export const Select = ({
  variant = 'default',
  value,
  onValueChange,
  items,
  label,
  placeholder,
  disabled,
  className = '',
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const classNames = {
    trigger: `${s.default} ${variant === 'pagination' ? s.pagination : ''} ${className}`,
    item: `${s.item} ${variant === 'pagination' ? s.paginationItem : ''}`,
  }

  return (
    <Typography variant="body2" as={'label'} className={disabled ? s.labelDisabled : s.label}>
      {label}
      <SelectRadix.Root
        value={variant === 'pagination' ? value.toString() : undefined}
        onValueChange={onValueChange}
        disabled={disabled}
        open={open}
        onOpenChange={setOpen}
      >
        <SelectRadix.Trigger className={classNames.trigger}>
          <SelectRadix.Value placeholder={<Typography variant="body1">{placeholder}</Typography>}>
            <Typography variant={variant === 'pagination' ? 'body2' : 'body1'}>{value}</Typography>
          </SelectRadix.Value>
          <SelectRadix.Icon asChild>
            {open ? <ArrowUp /> : <ArrowDown disabled={disabled} />}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content
            className={s.content}
            position="popper"
            collisionPadding={0}
            sideOffset={-1}
          >
            <SelectRadix.Viewport>
              {items.map(item => (
                <SelectRadix.Item
                  key={item.value}
                  className={classNames.item}
                  value={item.value.toString()}
                >
                  <SelectRadix.ItemText>{item.label}</SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </Typography>
  )
}
