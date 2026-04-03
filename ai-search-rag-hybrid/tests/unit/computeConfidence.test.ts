import { computeConfidence } from '../../src/utils/computeConfidence'

test('returns normalized confidence', () => {
  const docs = [{ score: 5 }]
  expect(computeConfidence(docs as any)).toBeGreaterThan(0)
})