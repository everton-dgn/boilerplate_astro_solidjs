import { createSignal } from 'solid-js'

import type { UseCount } from './types'

export const useCount = (): UseCount => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)
  return { count, increment }
}
