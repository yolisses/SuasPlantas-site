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
    <div className="flex flex-row h-32 mb-2 mx-2">
      <div className="w-32 h-32 mr-2">
        <Image
          src={someImage + "1"}
          width={200}
          height={200}
          className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={"plants/" + item.id}>
          <div>{name}</div>
        </Link>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </div>
  );
}
