interface FieldBoxProps {
  label: string;
  error?: string;
  children?: JSX.Element;
  labelClassName?: string;
}

export function FieldBox({
  label,
  error,
  children,
  labelClassName,
}: FieldBoxProps) {
  return (
    <label>
      <div className="flex flex-col items-start transform -translate-y-1 mb-3">
        <label className={"ml-2 translate-y-1 " + labelClassName || ""}>
          {label}
        </label>
        {children}
        <div className="text-red-800">Algum erro aconteceu aqui{error}</div>
      </div>
    </label>
  );
}
