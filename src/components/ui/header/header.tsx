import { ComponentPropsWithoutRef } from 'react'

import { Button } from '../button'
import { Typography } from '../typography'

import s from './header.module.scss'

import { HeaderLogo } from '@/assets'

type Props = {
  variant?: 'with button' | 'with avatar'
} & ComponentPropsWithoutRef<'header'>

export const Header = ({ variant = 'with button', ...rest }: Props) => {
  return (
    <header {...rest} className={s.header}>
      <HeaderLogo />
      {variant === 'with avatar' ? (
        <div className={s.userBlock}>
          <Typography variant="subtitle1" as="span" className={s.userName}>
            Sign In
          </Typography>
          <img
            className={s.avatar}
            src="https://fikiwiki.com/uploads/posts/2022-02/1644918620_17-fikiwiki-com-p-krasivie-kartinki-visokogo-razresheniya-19.jpg"
            alt="User avatar"
          />
        </div>
      ) : (
        <Button>
          <Typography variant="subtitle2" as="span">
            Sign In
          </Typography>
        </Button>
      )}
    </header>
  )
}
