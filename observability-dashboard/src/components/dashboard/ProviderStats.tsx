import { useObservabilityStore } from "../../state/observabilityStore";

export function ProviderStats() {
  const events = useObservabilityStore((s) => s.events);

  const grouped = events.reduce(
    (acc, e) => {
      acc[e.provider] = acc[e.provider] || [];
      acc[e.provider].push(e);
      return acc;
    },
    {} as Record<string, any[]>,
  );

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">Providers</h2>

      {Object.entries(grouped).map(([provider, events]) => (
        <div key={provider}>
          {provider}: {events.length}
        </div>
      ))}
    </div>
  );
}
