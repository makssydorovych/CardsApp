import { DevTool } from '@hookform/devtools'

import { NewPasswordForm, useNewPasswordScheme } from '../../schemes/use-new-password-scheme.ts'
import { Button } from '../../ui/button'
import { ControlledTextField } from '../../ui/controlled'

import s from './new-password.module.scss'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

type Props = {
  onSubmit: (data: NewPasswordForm) => void
}

export const NewPassword = ({ onSubmit }: Props) => {
  const { handleSubmit, control } = useNewPasswordScheme()

  const onFormSubmit = handleSubmit(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={onFormSubmit}>
        <DevTool control={control} />
        <ControlledTextField label="Password" type={'password'} control={control} name="password" />

        <Typography variant="body2" className={s.description}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type="submit" fullWidth className={s.button}>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
