import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { RadioItem, RadioItemProps } from '@/components/ui/radio-group/radio-group-item.tsx'

export type RadioGroupProps = { options: RadioItemProps[] } & ComponentPropsWithoutRef<
  typeof Radio.Root
>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  ({ options, className, ...restProps }, ref): JSX.Element => {
    return (
      <Radio.Root ref={ref} className={`${s.root} ${className ?? ''}`} {...restProps}>
        {options.map(item => (
          <RadioItem key={item.value} {...item} />
        ))}
      </Radio.Root>
    )
  }
)
