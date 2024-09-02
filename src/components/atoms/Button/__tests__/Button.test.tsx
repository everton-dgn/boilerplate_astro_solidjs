import { createRoot } from 'solid-js'

import { screen } from '@solidjs/testing-library'
import { event } from 'tests/utils'
import { renderWithProviders } from 'tests/providers'

import { Button } from '..'

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    const onClick = vi.fn()
    renderWithProviders(
      createRoot(() => <Button label="Mais Informações" onClick={onClick} />)
    )

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    await event().click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
