const link =
  "https://unsplash.com/photos/fIoQ-aRycys/download?force=true&w=640";

import Image from "next/image";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";

interface ListItemDTO {
  item: Plant;
}

export function ListItem({ item }: ListItemDTO) {
  const { name, description } = item;
  return (
    <div className="mx-1 mb-1 flex flex-row">
      <Image
        alt=""
        width={140}
        height={140}
        src={someImage}
        className="rounded-xl bg-gray-200"
      />
      <div>
        <div className="ml-2">{name}</div>
        <div className="ml-2">{description}</div>
      </div>
    </div>
  );
}
