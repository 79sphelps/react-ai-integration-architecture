import { useObservabilityStore } from "../../state/observabilityStore";

export function LogsPanel() {
  const events = useObservabilityStore((s) => s.events);

  return (
    <section className="border p-4 rounded col-span-2 bg-white shadow-sm">
      <h2 className="font-semibold mb-2">Live Activity</h2>

      <div className="max-h-[300px] overflow-auto text-xs">
        {events.map((e, i) => {
          const isNew = i < 3;

          return (
            <div
              key={e.id}
              className={`border-b py-1 flex justify-between transition ${
                isNew ? "bg-yellow-50" : ""
              }`}
            >
              <span>
                [{e.type}] {e.provider}
              </span>
              <span>{Math.round(Date.now() - e.timestamp)}ms ago</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
