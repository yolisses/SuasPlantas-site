export function TextInput({ label, optional }) {
  return (
    <div className="flex flex-col items-start  transform -translate-y-1">
      <label className="text-lg ml-2 bg-white z-10 relative transform translate-y-1">
        {label}
      </label>
      <input
        type="textarea"
        placeholder={optional ? "opcional" : null}
        className="border-2 self-stretch border-gray-300 text-lg rounded-lg p-2 mb-4 focus:border-black outline-none focus:border-4"
      />
    </div>
  );
}
