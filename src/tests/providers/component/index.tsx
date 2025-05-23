import type { JSX } from 'solid-js'

import { render } from '@solidjs/testing-library'
import { MainProvider } from 'components/atoms/MainProvider'

export const renderWithProviders = (children: () => JSX.Element): any =>
  render(() => <MainProvider>{children()}</MainProvider>)
