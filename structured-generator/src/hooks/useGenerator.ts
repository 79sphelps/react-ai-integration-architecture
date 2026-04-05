import { useRef, useState } from "react";
import { generateProject } from "../ai/generator";

export function useGenerator() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  async function run(input: string) {
    setLoading(true);
    setError(null);

    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    try {
      const res = await generateProject(input);
      setData(res);
    } catch (e: any) {
      setError(e.message);
    }

    setLoading(false);
  }

  function cancel() {
    controllerRef.current?.abort();
    setLoading(false);
  }

  return { data, loading, error, run, cancel };
}
