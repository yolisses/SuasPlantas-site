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
    <div className="flex flex-row h-32 mb-1 mx-1">
      <div className="w-32 h-32 mr-1">
        <Image
          src={someImage}
          width={200}
          height={200}
          className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <div>{name}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </div>
  );
}
