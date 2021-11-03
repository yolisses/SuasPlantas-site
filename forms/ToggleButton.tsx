interface ToggleButtonProps {
  text: string;
  className?: string;
  active: boolean;
}

export function ToggleButton({ text, className, active }: ToggleButtonProps) {
  return (
    <div
      className={
        "border-2 p-3 border-gray-300 text-center rounded-lg whitespace-nowrap " +
        (active ? "border-green-400 " : "") +
        (className || "")
      }
    >
      {text}
    </div>
  );
}
