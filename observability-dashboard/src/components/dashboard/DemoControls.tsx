import { useEffect, useRef, useState } from "react";
import { generateWithProvider } from "../../provider/providerRouter";

export function DemoControls() {
  const [running, setRunning] = useState(false);
  const [bursting, setBursting] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const randomProvider = () => (Math.random() < 0.8 ? "mock" : "error");

  const randomDelay = () => 200 + Math.random() * 800;

  const fireRequest = async () => {
    try {
      await generateWithProvider(randomProvider(), "auto");
    } catch {}
  };

  // Continuous traffic
  useEffect(() => {
    if (!running) return;

    intervalRef.current = window.setInterval(() => {
      fireRequest();
    }, randomDelay());

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  // Burst traffic
  const runBurst = async () => {
    setBursting(true);

    const burst = Array.from({ length: 20 }).map(() => fireRequest());

    await Promise.allSettled(burst);

    setBursting(false);
  };

  return (
    <div className="p-4 flex gap-2 flex-wrap">
      <button
        onClick={() => setRunning((r) => !r)}
        className="px-3 py-2 bg-blue-600 text-white rounded"
      >
        {running ? "Stop Traffic" : "Start Traffic"}
      </button>

      <button
        onClick={runBurst}
        disabled={bursting}
        className="px-3 py-2 bg-purple-600 text-white rounded"
      >
        {bursting ? "Bursting..." : "Burst x20"}
      </button>
    </div>
  );
}
