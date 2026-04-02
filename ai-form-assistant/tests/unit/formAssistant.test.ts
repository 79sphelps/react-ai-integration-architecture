import { getSuggestions } from '../../src/api/mockAssistant'

test('returns suggestions', async () => {
  const res = await getSuggestions('test')
  expect(res).toContain('email')
})