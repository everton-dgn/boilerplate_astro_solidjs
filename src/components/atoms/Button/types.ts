import type { JSX } from 'solid-js'

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}
