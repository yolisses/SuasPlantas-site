interface EmphasisButtonProps {
  text: string;
  submit?: boolean;
}

export function EmphasisButton({ text, submit }: EmphasisButtonProps) {
  return (
    <input
      value={text}
      type={submit ? "submit" : "button"}
      className="flex items-center shadow-md justify-center bg-green-700 rounded-lg p-3 w-full text-white cursor-pointer "
    ></input>
  );
}
