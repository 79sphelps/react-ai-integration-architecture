import { classifyIntent } from '../../src/ai/intentClassifier'

test('detect summarize', () => {
  expect(classifyIntent('summarize this')).toBe('summarize')
})