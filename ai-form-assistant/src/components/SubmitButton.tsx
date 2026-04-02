export function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      disabled={disabled}
      className="w-full bg-green-600 text-white py-2 rounded-xl disabled:opacity-50"
    >
      Submit Form
    </button>
  );
}
