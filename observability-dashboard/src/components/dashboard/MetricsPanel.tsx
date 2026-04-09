import { useObservabilityStore } from "../../state/observabilityStore";
import { computeMetrics } from "../../observability/core/metrics";
import { formatMs, formatPercent } from "../../observability/utils/format";

export function MetricsPanel() {
  const events = useObservabilityStore((s) => s.events);
  const metrics = computeMetrics(events);

  if (!events.length) {
    return <div className="p-4 border rounded">No data yet</div>;
  }

  return (
    <section
      aria-label="Metrics"
      className="border p-4 rounded bg-white shadow-sm"
    >
      <h2 className="font-semibold mb-2">Metrics</h2>

      <div>Total: {metrics.total}</div>
      <div>Error Rate: {formatPercent(metrics.errorRate)}</div>
      <div>Avg Latency: {formatMs(metrics.avgLatency)}</div>
    </section>
  );
}
