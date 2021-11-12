import Image from "next/image";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";

export function ShowScreen({ data }: { data: Plant }) {
  return (
    <div>
      <Header />
      <Image
        src={someImage}
        objectFit="cover"
        className="rounded-b-xl bg-gray-200 bg-fixed w-full"
        width={400}
        height={400}
      />
      <div className="p-2">
        <div className="text-xl">{data.name}</div>
        <div>hello {data.id}!</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    </div>
  );
}
