import { computeMetrics } from '../src/observability/metrics/metricsEngine'

test('computes metrics correctly', () => {
  const now = Date.now()

  const events = [
    { type: 'request_success', timestamp: now, duration: 100 },
    { type: 'request_error', timestamp: now, duration: 200 },
  ]

  const result = computeMetrics(events)

  expect(result.throughput).toBeGreaterThan(0)
  expect(result.errorRate).toBe(0.5)
})