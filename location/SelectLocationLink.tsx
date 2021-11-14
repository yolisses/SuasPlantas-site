import Link from "next/link";
import { FaMapMarker, FaMapMarkerAlt, FaMarker } from "react-icons/fa";

export function SelectLocationLink() {
  return (
    <Link href="/select-location">
      <div className="flex flex-row items-center m-2">
        <FaMapMarkerAlt size={20} color="green" />
        <div className="font-semibold" style={{ color: "green" }}>
          Cajazeiras, Paraíba
        </div>
      </div>
    </Link>
  );
}
