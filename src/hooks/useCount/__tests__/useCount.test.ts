import { useCount } from '..'

import { renderHooksProvider } from 'tests/providers/hook'

describe('[Hook] useCount', () => {
  it('should increment when call count', () => {
    const { result } = renderHooksProvider(() => useCount())

    expect(result.count()).toBe(0)

    result.increment()
    expect(result.count()).toBe(1)

    result.increment()
    expect(result.count()).toBe(2)
  })
})
