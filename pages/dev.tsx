import Image from "next/image";
import { someImage } from "../mock/someImage";

export default function Dev() {
  return (
    <div>
      <img src={someImage} />
    </div>
  );
}
