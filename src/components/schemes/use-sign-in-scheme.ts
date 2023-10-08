import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false).optional(),
})

export type SingInForm = z.infer<typeof schema>

export const useSignInScheme = () => {
  const { handleSubmit, control } = useForm<SingInForm>({ resolver: zodResolver(schema) })

  return { handleSubmit, control }
}
