// import { useObservabilityStore } from "../../state/observabilityStore";
// import { computeMetrics } from "../../observability/core/metrics";
// import { formatMs, formatPercent } from "../../observability/utils/format";

// export function MetricsPanel() {
//   const events = useObservabilityStore((s) => s.events);
//   const metrics = computeMetrics(events);

//   if (!events.length) {
//     return <div className="p-4 border rounded">No data yet</div>;
//   }

//   return (
//     <section
//       aria-label="Metrics"
//       className="border p-4 rounded bg-white shadow-sm"
//     >
//       <h2 className="font-semibold mb-2">Metrics</h2>

//       <div>Total: {metrics.total}</div>
//       <div>Error Rate: {formatPercent(metrics.errorRate)}</div>
//       <div>Avg Latency: {formatMs(metrics.avgLatency)}</div>
//     </section>
//   );
// }


import { useMetrics } from '../../observability/hooks/useMetrics'
import { useMetricsStore } from '../../state/metricsStore'
import { LineChart } from '../charts/LineChart'

export function MetricsPanel() {
  const metrics = useMetrics()
  const history = useMetricsStore((s) => s.history)

  const health =
    metrics.errorRate > 0.5
      ? '🔴 Unhealthy'
      : metrics.errorRate > 0.2
      ? '🟡 Degraded'
      : '🟢 Healthy'

  return (
    <div className="border p-4 rounded bg-white">
      <h2 className="font-semibold mb-2">Metrics</h2>

      <div className="mb-2">Status: {health}</div>
      <div>Throughput: {metrics.throughput.toFixed(2)} rps</div>
      <div>Error Rate: {(metrics.errorRate * 100).toFixed(1)}%</div>
      <div>Avg Latency: {metrics.avgLatency.toFixed(0)} ms</div>

      <div className="mt-4">
        <LineChart data={history} />
      </div>
    </div>
  )
}