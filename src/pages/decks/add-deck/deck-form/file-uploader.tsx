import { ChangeEvent, ComponentPropsWithoutRef, ReactNode, useRef } from 'react'

import { ZodError } from 'zod'

import s from './file-uploader.module.scss'

import {
  FileUploaderPayload,
  fileUploaderSchema,
} from '@/components/schemes/use-file-uploader-scheme.ts'
import { Typography } from '@/components/ui/typography'

type Props = {
  children: ReactNode
  onLoadCover: (file: FileUploaderPayload) => void
  onLoadError: (error: string) => void
} & ComponentPropsWithoutRef<'input'>

export const FileUploader = ({
  children,
  className,
  onLoadCover,
  onLoadError,
  ...restProps
}: Props): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      fileUploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const err = e as Error | ZodError

      if (err instanceof ZodError) {
        onLoadError('Zod error: ' + err.errors[0].message)
      } else {
        onLoadError('Native error: ' + err.message)
      }
    }
  }

  return (
    <Typography
      className={`${s.uploader} ${className}`}
      variant={'h2'}
      as="label"
      onClick={() => ref.current?.click()}
    >
      {children}
      <input
        ref={ref}
        className={s.fileInput}
        type="file"
        onChange={onChangeHandler}
        {...restProps}
      />
    </Typography>
  )
}
