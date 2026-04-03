import { shouldUseLLM } from '../../src/utils/shouldUseLLM'

test('uses LLM when confidence is low', () => {
  expect(shouldUseLLM(0.2)).toBe(true)
  expect(shouldUseLLM(0.8)).toBe(false)
})