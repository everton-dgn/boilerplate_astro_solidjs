import { screen } from '@solidjs/testing-library'
import { renderWithProviders } from 'tests/providers/component'
import { event } from 'tests/utils'

import { Button } from '..'

describe('[Component] Button', () => {
  it('should call a function once on click on the button', async () => {
    const onClick = vi.fn()
    renderWithProviders(() => (
      <Button label="Mais Informações" onClick={onClick} />
    ))

    const btn = screen.getByRole('button', { name: /Mais Informações/i })
    await event().click(btn)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
