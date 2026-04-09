import { useEffect, useState } from "react";
import { useObservabilityStore } from "../../state/observabilityStore";

export function RequestRate() {
  const events = useObservabilityStore((s) => s.events);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const lastSecond = events.filter((e) => now - e.timestamp < 1000);

      setRate(lastSecond.length);
    }, 500);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className="border p-4 rounded bg-white shadow-sm">
      <h2 className="font-semibold">Throughput</h2>
      <div className="text-2xl">{rate} req/s</div>
    </div>
  );
}
