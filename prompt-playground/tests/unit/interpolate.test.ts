import { interpolate } from '../../src/utils/interpolate'

test('replaces variables correctly', () => {
  const result = interpolate('Hello {name}', { name: 'Steve' })
  expect(result).toBe('Hello Steve')
})