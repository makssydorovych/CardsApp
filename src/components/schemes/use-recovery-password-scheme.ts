import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export type RecoveryPasswordForm = z.infer<typeof schema>

export const useRecoveryPasswordScheme = () => {
  const { handleSubmit, control } = useForm<RecoveryPasswordForm>({ resolver: zodResolver(schema) })

  return { handleSubmit, control }
}
