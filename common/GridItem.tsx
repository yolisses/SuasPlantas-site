import Image from "next/image";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import Link from "next/link";
import { AvailabilityInfo } from "../show/AvailabilityInfo";

interface GridItemDTO {
  item: Plant;
}

export function GridItem({ item }: GridItemDTO) {
  const { name, description, swap, donate, price } = item;
  return (
    <Link href={"/plants/" + item.id}>
      <div className="flex flex-col">
        <Image
          width={400}
          height={400}
          src={someImage}
          objectFit="cover"
          className="bg-gray-200 flex-shrink-0 rounded-xl"
        />
        <div>{item.name}</div>
        <AvailabilityInfo {...{ swap, donate, price }} className="text-sm" />
      </div>
    </Link>
  );
}
