import Image from "next/image";
import { HeaderLayout } from "../common/HeaderLayout";
import { EmphasisButton } from "../forms/EmphasisButton";
import { someImageU } from "../mock/someImage";
import { User } from "./User";

interface UserScreenProps {
  user: User;
}

export function UserScreen({ user }: UserScreenProps) {
  return (
    <div className="flex">
      <HeaderLayout className="shadow-sm">{user.name}</HeaderLayout>
      <div className="p-2">
        <div className="flex flex-row gap-2">
          <Image
            className="rounded-full bg-cover w-24 h-24 object-cover"
            src={someImageU}
            height={120}
            width={120}
          />
          <div className="flex-1 text-lg flex-wrap flex overflow-ellipsis">
            <div className="overflow-ellipsis">{user.name}</div>
            <div>
              {/* <EmphasisButton text="Mensagem" />
              <EmphasisButton text="Seguir" /> */}
            </div>
          </div>
        </div>
        <div>{user.description}</div>
      </div>
    </div>
  );
}
