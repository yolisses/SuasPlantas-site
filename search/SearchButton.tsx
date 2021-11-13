interface SearchButtonProps {
  text: string;
}

export function SearchButton({ text }: SearchButtonProps) {
  return (
    <div className="p-2 bg-gray-200 rounded-full min-w-4 text-center">
      {text}
    </div>
  );
}
