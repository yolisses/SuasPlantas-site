import Image from "next/image";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import Link from "next/link";
import { AvailabilityInfo } from "../show/AvailabilityInfo";

interface ListItemDTO {
  item: Plant;
}

export function ListItem({ item }: ListItemDTO) {
  const { name, description } = item;
  return (
    <Link href={"/plants/" + item.id}>
      <ul className="flex flex-row cursor-pointer">
        <Image
          src={item.card}
          width={140}
          height={140}
          className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
        />
        <div className="mr-2" />
        <div className="flex flex-1 overflow-hidden">
          <div className="text-lg">{name}</div>
          <AvailabilityInfo {...item} />
          <div className="pb-2" />
          <div className="text-gray-700 text-sm">{description}</div>
        </div>
      </ul>
    </Link>
  );
}
