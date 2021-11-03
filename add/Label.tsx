interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return (
    <label className="ml-2 bg-white z-10 relative transform translate-y-1">
      {text}
    </label>
  );
}
