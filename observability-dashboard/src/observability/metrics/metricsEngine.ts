type MetricSnapshot = {
  timestamp: number
  throughput: number
  errorRate: number
  avgLatency: number
}

export function computeMetrics(events: any[]): MetricSnapshot {
  const now = Date.now()
  const windowMs = 10000

  const recent = events.filter(
    (e) => now - e.timestamp < windowMs
  )

  const total = recent.length
  const errors = recent.filter((e) => e.type === 'request_error').length

  const latencies = recent
    .filter((e) => e.duration)
    .map((e) => e.duration)

  const avgLatency =
    latencies.length > 0
      ? latencies.reduce((a, b) => a + b, 0) / latencies.length
      : 0

  return {
    timestamp: now,
    throughput: total / 10,
    errorRate: total ? errors / total : 0,
    avgLatency,
  }
}