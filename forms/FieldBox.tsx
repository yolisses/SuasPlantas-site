interface FieldBoxProps {
  label: string;
  error?: string;
  labelActive?: boolean;
  children?: JSX.Element;
  labelClassName?: string;
}

export function FieldBox({
  label,
  error,
  children,
  labelClassName,
  labelActive = true,
}: FieldBoxProps) {
  const content = (
    <div className="flex flex-col items-start transform -translate-y-1">
      <label className={"ml-2 translate-y-1 px-1 " + labelClassName || ""}>
        {label}
      </label>
      {children}
      <div className="text-red-800">{error}</div>
    </div>
  );

  if (!labelActive) return <div>{content}</div>;

  return <label>{content}</label>;
}
