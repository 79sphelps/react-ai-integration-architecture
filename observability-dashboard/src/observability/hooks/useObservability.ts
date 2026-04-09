import { useEffect, useRef } from "react";
import { subscribe } from "../core/eventBus";
import { useObservabilityStore } from "../../state/observabilityStore";

// export function useObservability() {
//   const addEvent = useObservabilityStore((s) => s.addEvent)
//   const subscribed = useRef(false)

//   useEffect(() => {
//     if (subscribed.current) return
//     subscribed.current = true

//     const unsub = subscribe(addEvent)
//     return unsub
//   }, [addEvent])
// }

export function useObservability() {
  const addEvent = useObservabilityStore((s) => s.addEvent);

  useEffect(() => {
    const unsub = subscribe(addEvent);
    return unsub;
  }, [addEvent]);
}
