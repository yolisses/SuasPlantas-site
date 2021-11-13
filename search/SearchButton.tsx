import Link from "next/link";

interface SearchButtonProps {
  text: string;
}

export function SearchButton({ text }: SearchButtonProps) {
  return (
    <Link href={"/s?q=" + text}>
      <div className="p-2 bg-gray-200 rounded-full min-w-4 text-center">
        {text}
      </div>
    </Link>
  );
}
