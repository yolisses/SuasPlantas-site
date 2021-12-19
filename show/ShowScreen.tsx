import Image from "next/image";
import { Header } from "../common/Header";
import { someImage } from "../mock/someImage";
import { Plant } from "../types/Plant";
import { AvailabilityInfo } from "./AvailabilityInfo";
import { Session } from "./Session";
import Head from "next/head";
import { availabilitiesToString } from "./availabilitiesToString";
import { UserLink } from "../user/UserLink";
import { User } from "../user/User";
import { loremIpsum } from "../mock/loremIpsum";

export function ShowScreen({ data }: { data: Plant }) {
  const {
    name,
    description,
    swap,
    donate,
    owner,
    price,
    tags,
    images,
    updatedAt: updatedAtString,
  } = data;

  const updatedAt = new Date(updatedAtString);

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
                src={data.images[0].uri}
                width={600}
                height={700}
                className="bg-fixed w-full rounded-b-lg object-cover sm:object-contain block"
              />
              {/* {JSON.stringify(data.images[0].uri)} */}
            </div>
          </div>
          <div className="flex-1">
            <div className="p-2 gap-4 flex">
              <Session>
                <h1 className="text-2xl">{name}</h1>
                <AvailabilityInfo {...{ swap, donate, price }} />
              </Session>
              {!!tags?.length && (
                <Session label="Marcado como">
                  <div></div>
                  {/* <TagsInfo tags={tags} /> */}
                </Session>
              )}
              <UserLink user={data.user} />
              <div>
                Última edição <time>{updatedAt.toLocaleDateString()}</time>
              </div>

              {!!description?.length && (
                <Session label="Descrição">
                  <div>{description}</div>
                  {/* <div>{loremIpsum}</div> */}
                </Session>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* <div>{loremIpsum}</div> */}
    </div>
  );
}
