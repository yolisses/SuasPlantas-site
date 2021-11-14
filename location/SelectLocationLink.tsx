import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export function SelectLocationLink() {
  return (
    <Link href="/select-location">
      <div className="flex flex-row items-center m-2">
        <FaMapMarkerAlt size={20} color="#080" />
        <div className="font-semibold" style={{ color: "#080" }}>
          Cajazeiras, Paraíba
        </div>
      </div>
    </Link>
  );
}
