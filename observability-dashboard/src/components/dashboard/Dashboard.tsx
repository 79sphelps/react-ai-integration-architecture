import { useObservability } from "../../observability/hooks/useObservability";
import { MetricsPanel } from "./MetricsPanel";
import { LogsPanel } from "./LogsPanel";
import { ProviderStats } from "./ProviderStats";
import { RequestRate } from "./RequestRate";

export function Dashboard() {
  useObservability();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
      <MetricsPanel />
      <RequestRate />
      <ProviderStats />
      <LogsPanel />
    </div>
  );
}
