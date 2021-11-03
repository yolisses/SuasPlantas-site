interface LabelProps {
  text: string;
  className: string;
}

export function Label({ text, className }: LabelProps) {
  return <label className={"ml-2 " + className || ""}>{text}</label>;
}
