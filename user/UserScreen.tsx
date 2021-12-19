import Image from "next/image";
import { HeaderLayout } from "../common/HeaderLayout";
import { loremIpsum } from "../mock/loremIpsum";
import { someImage } from "../mock/someImage";
import { User } from "./User";
import { GridItem } from "../common/GridItem";
import { SignOutButton } from "./SignOutButton";

interface UserScreenProps {
  user: User;
}

export function UserScreen({ user }: UserScreenProps) {
  return (
    <div className="flex">
      <HeaderLayout className="shadow-sm">{user.name}</HeaderLayout>
      <div className="p-2">
        <SignOutButton />
        <div className="flex flex-row gap-2">
          <Image
            className="rounded-full bg-cover w-24 h-24 object-cover"
            src={user.image || someImage}
            height={100}
            width={100}
          />
          <div className="flex-1 flex-wrap flex overflow-ellipsis">
            <div className="overflow-ellipsis text-lg">{user.name}</div>
            <div>
              {/* <EmphasisButton text="Mensagem" />
              <EmphasisButton text="Seguir" /> */}
            </div>
          </div>
        </div>
        <div className="py-3">
          {user.description || loremIpsum.slice(0, 500)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
          {user.plants?.map((plant) => (
            <GridItem item={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}
