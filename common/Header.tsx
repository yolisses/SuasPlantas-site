import Link from "next/link";

export function Header() {
  return (
    <div className="bg-green-700 text-white p-4">
      <Link href="/">
        <div className="text-lg">Plantes</div>
      </Link>
    </div>
  );
}
