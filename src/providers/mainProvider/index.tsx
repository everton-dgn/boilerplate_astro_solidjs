import type { JSX } from 'solid-js'

import type { MainProvidersProps } from './types'

export const MainProvider = (props: MainProvidersProps): JSX.Element => {
  return <>{props.children}</>
}
