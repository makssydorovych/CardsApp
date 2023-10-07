import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className = '', ...rest }: Props) => {
  return <div className={`${s.card} ${className}`} {...rest}></div>
}
