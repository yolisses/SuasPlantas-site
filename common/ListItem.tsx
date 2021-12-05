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
      <ul className="flex flex-row">
        <Image
          src={someImage}
          width={140}
          height={140}
          className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
        />
        <div className="mr-2" />
        <div className="flex-1 overflow-hidden">
          <div className="text-lg">{name}</div>
          <div className="text-gray-700 text-sm">{description}</div>
        </div>
      </ul>
    </Link>
  );
}
