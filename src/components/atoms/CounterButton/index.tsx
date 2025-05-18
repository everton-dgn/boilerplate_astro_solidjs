import IconPlus from '~icons/lucide/plus'

import { useCount } from 'hooks/useCount'

import { Button } from '../Button'

export const CounterButton = () => {
  const { count, increment } = useCount()

  return (
    <Button
      aria-label={`COUNT: ${count()}`}
      label={`COUNT: ${count()}`}
      onClick={increment}
      icon={<IconPlus width={20} height={20} color="#fff" />}
    />
  )
}
