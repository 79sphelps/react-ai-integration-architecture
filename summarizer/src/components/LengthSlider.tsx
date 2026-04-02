export function LengthSlider({ options, setOptions }: any) {
  return (
    <input
      type="range"
      min={50}
      max={500}
      value={options.length}
      onChange={(e) =>
        setOptions((o: any) => ({ ...o, length: Number(e.target.value) }))
      }
      className="w-full"
    />
  );
}
