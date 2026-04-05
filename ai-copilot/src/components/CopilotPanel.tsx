import { useCopilot } from "../hooks/useCopilot";
import { CopilotInput } from "./CopilotInput";
import { CopilotResponse } from "./CopilotResponse";
import { CopilotLoading } from "./CopilotLoading";
import { CopilotError } from "./CopilotError";
import { CopilotEmpty } from "./CopilotEmpty";
import { CopilotHistory } from "./CopilotHistory";
import { CopilotTracePanel } from "./CopilotTracePanel";

export function CopilotPanel() {
  const { response, loading, error, run } = useCopilot();

  return (
    <div className="p-4 border rounded-xl w-full max-w-xl mx-auto space-y-3">
      <CopilotInput onSubmit={run} />

      {error && <CopilotError message={error} />}

      {!loading && !response && !error && <CopilotEmpty />}

      {loading && <CopilotLoading />}

      {response && (
        <>
          <CopilotResponse data={response} />
          <CopilotTracePanel trace={response.trace} />
        </>
      )}

      <CopilotHistory />
    </div>
  );
}
