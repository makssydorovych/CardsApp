import { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '../typography'

import s from './text-field.module.scss'

import { Eye, EyeOff, Search } from '@/assets/icons'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  containerProps?: ComponentProps<'div'>
  labelProps?: ComponentProps<'label'>
  errorMessage?: string
  label?: string
  isSearch?: boolean
  isDisabled?: boolean
  placeholder?: string | JSX.Element | undefined
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type,
      labelProps,
      label,
      onChange,
      onValueChange,
      isSearch,
      isDisabled,
      ...restProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const passwordShown = type === 'password'
    const [inputValue, setInputValue] = useState('')
    const finalType = getFinalType(type, showPassword, isSearch)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
      setInputValue(e.target.value)
    }

    return (
      <div>
        {label && (
          <Typography
            variant="body2"
            as="label"
            className={`${s.label} ${labelProps?.className || ''}`}
          >
            {label}
          </Typography>
        )}

        <div className={s.TextFieldContainer}>
          <input
            className={`${`${s.field} ${errorMessage ? s.error : ''} ${className || ''}`} ${
              isDisabled ? s.disabled : ''
            } ${isSearch ? s.searchCont : ''}`}
            placeholder={inputValue ? '' : placeholder}
            ref={ref}
            type={finalType}
            onChange={handleChange}
            {...restProps}
          />
          {isSearch && !inputValue && <Search className={s.search} />}
          {passwordShown && (
            <button
              className={s.showPassword}
              type={'button'}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>

        <Typography variant="error" className={s.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(
  type: ComponentProps<'input'>['type'],
  showPassword: boolean,
  isSearch: boolean | undefined
) {
  if (isSearch) {
    return 'search'
  }
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
