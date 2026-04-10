import { validateGraph } from '../../src/workflow/core/validation'

test('detects invalid edge', () => {
  const result = validateGraph(
    [{ id: '1' } as any],
    [{ from: '1', to: '2' }]
  )

  expect(result.valid).toBe(false)
})