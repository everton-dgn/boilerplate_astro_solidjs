import S from './styles.module.scss'

import type { ButtonProps } from './types'

export const Button = (props: ButtonProps) => (
  <button class={S.button} {...props}>
    {props.label}
  </button>
)
