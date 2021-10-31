import { FaPlus } from "react-icons/fa";

export function AddButton() {
  return (
    <div className="w-16 h-16 bg-green-700 rounded-full flex justify-center items-center shadow-lg">
      <FaPlus size={34} color="white" />
    </div>
  );
}
