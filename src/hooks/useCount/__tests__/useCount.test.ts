import { useCount } from '..'

import { renderHook } from '@solidjs/testing-library'

describe('[Hook] useCount', () => {
  it('should increment when call count', async () => {
    const { result } = renderHook(() => useCount())

    expect(result.count()).toBe(0)

    result.increment()
    expect(result.count()).toBe(1)

    result.increment()
    expect(result.count()).toBe(2)
  })
})
