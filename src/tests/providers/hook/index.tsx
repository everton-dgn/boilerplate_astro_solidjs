import type { JSX } from 'solid-js'

import { renderHook } from '@solidjs/testing-library'
import { MainProvider } from 'components/atoms/MainProvider'

import type { RenderHooksProviderProps, WrapperProps } from './types'

const wrapper = (props: WrapperProps): JSX.Element => (
  <MainProvider>{props.children}</MainProvider>
)

export const renderHooksProvider = (children: RenderHooksProviderProps) => {
  return renderHook(children, { wrapper })
}
