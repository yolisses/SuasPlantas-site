import { FaPlus } from "react-icons/fa";

export function AddButton() {
  return (
    <a href="/add">
      <div className="w-14 h-14 bg-green-700 rounded-full flex justify-center items-center shadow-lg">
        <FaPlus size={28} color="white" />
      </div>
    </a>
  );
}
