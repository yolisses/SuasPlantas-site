import Image from "next/image";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";

export function ShowScreen({ id }: { id: string }) {
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
      <div>hello {id}!</div>
    </div>
  );
}
