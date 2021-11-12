import Image from "next/image";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import { AvailabilityInfo } from "./AvailabilityInfo";

export function ShowScreen({ data }: { data: Plant }) {
  const { name, description, swap, donate, price } = data;

  return (
    <div>
      <Header />
      <Image
        src={someImage}
        objectFit="cover"
        className="bg-gray-200 bg-fixed w-full"
        width={800}
        height={800}
      />
      <div className="p-2 gap-2 flex">
        <div className="text-xl">{name}</div>
        <AvailabilityInfo {...{ swap, donate, price }} />
        <div className="">{description}</div>
      </div>
    </div>
  );
}
