import { useMemo } from 'react'
import { useObservabilityStore } from '../../state/observabilityStore'
import { computeMetrics } from '../metrics/metricsEngine'

export function useMetrics() {
  const events = useObservabilityStore((s) => s.events)

  return useMemo(() => computeMetrics(events), [events])
}