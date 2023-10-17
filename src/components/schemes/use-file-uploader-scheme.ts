import { z } from 'zod'

export const fileUploaderSchema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )

export type FileUploaderPayload = z.infer<typeof fileUploaderSchema>
