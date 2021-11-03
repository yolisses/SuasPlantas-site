interface ToggleButtonProps {
  text: string;
  className?: string;
  active: boolean;
}

export function ToggleButton({ text, className, active }: ToggleButtonProps) {
  return (
    <input
      type="button"
      value={text}
      className={
        "border-2 p-3 bg-white border-gray-300 text-center rounded-lg whitespace-nowrap " +
        (active ? "border-green-400 " : "text-gray-500 ") +
        (className || "")
      }
    ></input>
  );
}
