import { useCount } from '..'

import { renderHooksProvider } from 'tests/providers'

describe('[Hook] useCount', () => {
  it('should increment when call count', async () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.count()).toBe(0)

    result.increment()
    expect(result.count()).toBe(1)

    result.increment()
    expect(result.count()).toBe(2)
  })
})
