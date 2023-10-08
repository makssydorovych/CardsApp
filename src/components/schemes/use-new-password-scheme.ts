import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  password: z.string().min(3),
})

export type NewPasswordForm = z.infer<typeof schema>

export const useNewPasswordScheme = () => {
  const { handleSubmit, control } = useForm<NewPasswordForm>({ resolver: zodResolver(schema) })

  return { handleSubmit, control }
}
