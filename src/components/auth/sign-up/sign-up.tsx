import { DevTool } from '@hookform/devtools'

import s from './sign-up.module.scss'

import { SingUpForm, useSignUpScheme } from '@/components/schemes/use-sign-up-scheme.ts'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled'
import { Typography } from '@/components/ui/typography'

type Props = {
  onSubmit: (data: SingUpForm) => void
}
export const SignUp = (props: Props) => {
  const { handleSubmit, control } = useSignUpScheme()

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Sign Up
        </Typography>
        <form className={s.form} onSubmit={handleFormSubmitted}>
          <DevTool control={control} />
          <div className={s.form}>
            <ControlledTextField
              placeholder={'Email'}
              label={'Email'}
              name={'email'}
              control={control}
            />
            <ControlledTextField
              placeholder={'Password'}
              label={'Password'}
              type={'password'}
              name={'password'}
              control={control}
            />
            <ControlledTextField
              placeholder={'Confirm password'}
              label={'Confirm password'}
              type={'password'}
              name={'confirmPassword'}
              control={control}
            />
          </div>

          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>
        <Typography className={s.caption} variant="body2">
          Already have an account?
        </Typography>
        <Typography variant="link1" className={s.signInLink}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
