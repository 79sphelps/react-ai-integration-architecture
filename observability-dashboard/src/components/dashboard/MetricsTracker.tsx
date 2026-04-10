import { useEffect } from 'react'
import { useMetrics } from '../../observability/hooks/useMetrics'
import { useMetricsStore } from '../../state/metricsStore'

export function MetricsTracker() {
  const metrics = useMetrics()
  const push = useMetricsStore((s) => s.push)

  useEffect(() => {
    push(metrics.avgLatency)
  }, [metrics, push])

  return null
}