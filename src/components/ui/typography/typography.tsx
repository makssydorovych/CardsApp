import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export interface TextProps<T extends ElementType> {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
}

export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  ...restProps
}: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>) => {
  const Component = as || 'p'

  return <Component className={`${s[variant]} ${className}`} {...restProps} />
}
