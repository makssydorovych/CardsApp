import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { motion } from 'framer-motion'

import { dropdownAnimations } from '@/components/ui/dropdown/dropdownItem/dropdownAnimation.tsx'
import s from '@/components/ui/dropdown/dropdownItem/dropdownItem.module.scss'
import { DropdownItemProps } from '@/components/ui/dropdown/dropdownItem/dropdownItem.tsx'
import { Typography } from '@/components/ui/typography'
export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
export const DropdownItemWithIcon = forwardRef<
  ElementRef<typeof DropdownPrimitive.Item>,
  DropdownItemWithIconProps
>(({ icon, text, onSelect, className, ...props }, ref): JSX.Element => {
  return (
    <DropdownPrimitive.Item ref={ref} className={`${s.item} ${className || ''}`} asChild {...props}>
      <motion.div {...dropdownAnimations.item}>
        <div className={s.itemIcon}>{icon}</div>
        <Typography>{text}</Typography>
      </motion.div>
    </DropdownPrimitive.Item>
  )
})
