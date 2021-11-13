import Router from "next/router";
import { FaChevronLeft } from "react-icons/fa";

export function SearchScreen() {
  return (
    <div>
      <div className="flex flex-row">
        <FaChevronLeft onClick={() => Router.back()} />
      </div>
    </div>
  );
}
