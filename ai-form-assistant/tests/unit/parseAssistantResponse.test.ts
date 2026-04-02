import { parseAssistantResponse } from '../../src/utils/parseAssistantResponse'

test('parses valid response', () => {
  const result = parseAssistantResponse(
    '{"name":{"value":"John","confidence":0.9}}'
  )

  expect(result.name?.value).toBe('John')
})