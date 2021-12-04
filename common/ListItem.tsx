import Image from "next/image";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import Link from "next/link";

interface ListItemDTO {
  item: Plant;
}

export function ListItem({ item }: ListItemDTO) {
  const { name, description } = item;
  return (
    <Link href={"/plants/" + item.id}>
      <div className="flex flex-row h-32">
        <div className="w-32 h-32 mr-2">
          <Image
            src={someImage + "1"}
            width={200}
            height={200}
            className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <div>{name}</div>
          <div className="text-gray-500 text-sm">{description}</div>
        </div>
      </div>
    </Link>
  );
}
