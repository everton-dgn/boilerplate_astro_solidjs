import { createRoot } from 'solid-js'

import { screen } from '@solidjs/testing-library'
import { event } from 'tests/utils'
import { renderWithProviders } from 'tests/providers'

import { CounterButton } from '..'

const mockIncrement = vi.fn()
vi.mock('hooks', () => ({
  useCount: () => ({
    count: () => 0,
    increment: mockIncrement
  })
}))

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    renderWithProviders(createRoot(() => <CounterButton />))

    const btn = screen.getByRole('button', { name: /count:/i })
    await event().click(btn)

    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })
})
