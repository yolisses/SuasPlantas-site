import { FaPlus } from "react-icons/fa";
import Link from "next/link";

export function AddButton() {
  return (
    <Link href="/add">
      <div className="w-14 h-14 bg-green-700 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
        <FaPlus size={24} color="white" />
      </div>
    </Link>
  );
}
