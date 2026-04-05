import { renderHook, act } from '@testing-library/react'
import { useImageGenerator } from '../../src/hooks/useImageGenerator'

test('handles error state', async () => {
  const { result } = renderHook(() => useImageGenerator())

  await act(async () => {
    await result.current.run('')
  })

  expect(result.current.error).toBeTruthy()
})