import Image from "next/image";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import Link from "next/link";

interface GridItemDTO {
  item: Plant;
}

export function GridItem({ item }: GridItemDTO) {
  const { name, description } = item;
  return (
    <Link href={"/plants/" + item.id}>
      <div className="flex flex-col">
        <img
          src={someImage}
          className="bg-gray-200 flex-shrink-0 bg-cover rounded-xl"
        />
        <div>{item.name}</div>
      </div>
    </Link>
  );
}
