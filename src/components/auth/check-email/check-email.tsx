import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './check-email.module.scss'

import { Email } from '@/assets/icons/email'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Check Email
      </Typography>
      <Email className={s.emailIcon} />
      <Typography variant="body2" className={s.description}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>
      <Button type="submit" fullWidth className={s.button}>
        Back to Sign In
      </Button>
    </Card>
  )
}
