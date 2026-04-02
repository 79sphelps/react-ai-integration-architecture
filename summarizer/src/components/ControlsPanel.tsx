import { ModeSelector } from "./ModeSelector";
import { LengthSlider } from "./LengthSlider";
import { ToneSelector } from "./ToneSelector";

export function ControlsPanel(props: any) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ModeSelector {...props} />
      <ToneSelector {...props} />
      <div className="col-span-2">
        <LengthSlider {...props} />
      </div>
    </div>
  );
}
