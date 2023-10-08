import { ComponentPropsWithoutRef, ElementRef, forwardRef, JSX } from 'react'
import { Typography } from '@/components/ui/typography'
import s from './radio-group.module.scss'
import * as Radio from '@radix-ui/react-radio-group'

export type RadioItemProps = {
  title: string
} & ComponentPropsWithoutRef<typeof Radio.Item>

export const RadioItem = forwardRef<ElementRef<typeof Radio.Item>, RadioItemProps>(
  ({ value, title, disabled }, ref): JSX.Element => {
    return (
      <Typography
        className={`${s.label} ${disabled ? s.disabled : ''}`}
        as={'label'}
        variant={'body2'}
      >
        <Radio.Item ref={ref} className={s.item} value={value} disabled={disabled}>
          <Radio.Indicator className={s.indicator} />
        </Radio.Item>
        <Typography className={s.title} as="span" variant={'body2'}>
          {title}
        </Typography>
      </Typography>
    )
  }
)
