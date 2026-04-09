import { useState } from "react";

export function useLogFilter() {
  const [type, setType] = useState<string>("all");
  return { type, setType };
}
