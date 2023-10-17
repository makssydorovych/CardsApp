import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().min(3).nonempty('Enter password'),
  confirmPassword: z.string().min(3).nonempty('Confirm your password'),
  rememberMe: z.boolean().optional(),
})

export type SingUpForm = z.infer<typeof schema>

export const useSignUpScheme = () => {
  const { handleSubmit, control } = useForm<SingUpForm>({ resolver: zodResolver(schema) })

  return { handleSubmit, control }
}
