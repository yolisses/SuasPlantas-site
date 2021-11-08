import Link from "next/link";

export function Header() {
  return (
    <div className="bg-green-700 text-white p-4 flex flex-row justify-between">
      <Link href="/">
        <div className="text-lg">Plantes</div>
      </Link>
      <Link href="/sign-in">
        <div className="text-lg">sign in</div>
      </Link>
    </div>
  );
}
