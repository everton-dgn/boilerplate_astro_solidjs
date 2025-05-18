import S from './styles.module.css'
import type { ButtonProps } from './types'

export const Button = (props: ButtonProps) => (
  <button class={clsx(S.button, props.class)} onClick={props.onClick}>
    {props.icon}
    {props.label}
  </button>
)
