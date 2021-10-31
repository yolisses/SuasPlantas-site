interface TextInputProps {
  label: string;
  optional?: boolean;
}

export function TextInput({ label, optional }: TextInputProps) {
  return (
    <div className="flex flex-col items-start  transform -translate-y-1">
      <label className="ml-2 bg-white z-10 relative transform translate-y-1">
        {label}
      </label>
      <input
        type="textarea"
        placeholder={optional ? "opcional" : undefined}
        className="border-2 self-stretch border-gray-300 rounded-lg p-2 mb-3 focus:border-black outline-none focus:border-4"
      />
    </div>
  );
}
