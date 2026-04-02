import { useSummarizer } from "./hooks/useSummarizer";
import { TextInput } from "./components/TextInput";
import { ControlsPanel } from "./components/ControlsPanel";
import { RunButton } from "./components/RunButton";
import { SummaryOutput } from "./components/SummaryOutput";

export default function Summarizer() {
  const state = useSummarizer();

  return (
    <div className="h-screen grid grid-cols-2 gap-6 p-6 bg-gray-50">
      <div className="space-y-4 overflow-auto">
        <TextInput {...state} />
        <ControlsPanel {...state} />
        <RunButton {...state} />
      </div>

      <div className="border rounded-xl p-4 bg-white">
        <SummaryOutput {...state} />
      </div>
    </div>
  );
}
