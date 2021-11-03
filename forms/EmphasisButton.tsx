interface EmphasisButtonProps {
  text: string;
}

export function EmphasisButton({ text }: EmphasisButtonProps) {
  return (
    <div className="flex items-center shadow-md justify-center bg-green-600 rounded-lg p-2 w-full text-white ">
      {text}
    </div>
  );
}
