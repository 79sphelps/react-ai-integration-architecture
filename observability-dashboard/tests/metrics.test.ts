import { computeMetrics } from '../observability/core/metrics'

test('computes metrics correctly', () => {
  const events = [
    { type: 'request_success', duration: 100 },
    { type: 'request_error', duration: 200 },
  ] as any

  const m = computeMetrics(events)

  expect(m.total).toBe(2)
  expect(m.errors).toBe(1)
})