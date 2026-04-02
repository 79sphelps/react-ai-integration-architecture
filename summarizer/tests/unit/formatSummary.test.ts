import { formatSummary } from '../../src/utils/formatSummary'

test('parses valid JSON', () => {
  const result = formatSummary('{"summary":"test"}')
  expect(result?.summary).toBe('test')
})

test('returns null for invalid JSON', () => {
  const result = formatSummary('invalid')
  expect(result).toBeNull()
})