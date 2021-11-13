import Image from "next/image";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import { AvailabilityInfo } from "./AvailabilityInfo";
import { Session } from "./Session";
import { TagsInfo } from "./TagsInfo";
import Head from "next/head";
import { availabilitiesToString } from "./availabilitiesToString";

export function ShowScreen({ data }: { data: Plant }) {
  const {
    name,
    description,
    swap,
    donate,
    price,
    tags,
    updated_at: updated_at_string,
  } = data;
  const updatedAt = new Date(updated_at_string);
  return (
    <div>
      <Head>
        <title>
          {name} - {availabilitiesToString({ price, swap, donate })}{" "}
        </title>
      </Head>
      <Header />
      <main>
        <Image
          src={someImage}
          objectFit="cover"
          className="bg-gray-200 bg-fixed w-full rounded-b-lg"
          width={800}
          height={800}
        />
        <div className="p-2 gap-2 flex">
          <h1 className="text-xl">{name}</h1>
          <AvailabilityInfo {...{ swap, donate, price }} />
          {!!description?.length && (
            <Session label="Descrição">
              <div>{description}</div>
            </Session>
          )}
          {!!tags.length && (
            <Session label="Marcado como">
              <TagsInfo tags={tags} />
            </Session>
          )}
          <div>
            Última edição <time>{updatedAt.toLocaleDateString()}</time>
          </div>
        </div>
      </main>
    </div>
  );
}
