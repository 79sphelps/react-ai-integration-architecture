export function TemperatureSlider({ temperature, setTemperature }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        Temperature: {temperature.toFixed(2)}
      </label>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={temperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-xs text-gray-500 mt-1">
        Lower = deterministic, Higher = creative
      </div>
    </div>
  )
}