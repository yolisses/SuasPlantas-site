import Image from "next/image";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import { AvailabilityInfo } from "./AvailabilityInfo";
import { Label } from "./Label";

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
        <Label text="Descrição" />
        <div className="">{description}</div>
      </div>
    </div>
  );
}
