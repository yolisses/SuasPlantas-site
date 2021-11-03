interface ToggleButtonProps {
  text: string;
}

export function ToggleButton({ text }: ToggleButtonProps) {
  return (
    <div className="border-2 border-gray-300 p-3 flex-1 text-center rounded-lg">
      {text}
    </div>
  );
}
