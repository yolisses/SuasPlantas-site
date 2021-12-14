import Image from "next/image";
import { someImage } from "../mock/someImage";
import Link from "next/link";

export function MeButton() {
  const size = 36;
  return (
    <Link href="config">
      <Image
        width={size}
        height={size}
        src={someImage}
        className="bg-gray-300 rounded-full shadow-md"
      />
    </Link>
  );
}
