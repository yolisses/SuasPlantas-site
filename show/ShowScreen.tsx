import Image from "next/image";
import { Header } from "../common/Header";
import { someImage, someImage2, someImageH } from "../mock/someImage";
import { Plant } from "../types/Plant";
import { AvailabilityInfo } from "./AvailabilityInfo";
import { Session } from "./Session";
import { TagsInfo } from "./TagsInfo";
import Head from "next/head";
import { availabilitiesToString } from "./availabilitiesToString";
import { loremIpsum } from "../mock/loremIpsum";

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
        <div className="flex lg:flex-row lg:gap-2">
          <div className="flex-1 sm:sticky top-0">
            <div className="sticky top-0 flex items-center">
              <Image
                src={someImage}
                width={600}
                height={700}
                className="bg-fixed w-full rounded-b-lg object-cover sm:object-contain block"
              />
            </div>
          </div>
          <div className="flex-1">
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
              {/* <div>{loremIpsum}</div> */}
            </div>
          </div>
        </div>
      </main>
      {/* <div>{loremIpsum}</div> */}
    </div>
  );
}
