import S from './styles.module.css'
import type { ButtonProps } from './types'

export const Button = (props: ButtonProps) => (
  <button class={S.button} {...props}>
    {props.label}
  </button>
)
