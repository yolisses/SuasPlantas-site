import { User } from "./User";
import Image from "next/image";
import Link from "next/link";
import { someImage } from "../mock/someImage";

interface UserLinkProps {
  user: User;
  imgSize?: number;
}

export function UserLink({ user, imgSize = 50 }: UserLinkProps) {
  return (
    <Link href={"/users/" + user.id}>
      <div className="flex flex-row items-center gap-2">
        <Image
          width={imgSize}
          height={imgSize}
          src={user.picture || someImage}
          className="rounded-full bg-gray-300"
        />
        <div className="flex flex-col">
          <div className="font-semibold">{user.name}</div>
          <div className="text-gray-500 text-sm">
            Entrou no Plantes em{" "}
            <time>{new Date(user.dateJoined).getFullYear()}</time>
          </div>
        </div>
      </div>
    </Link>
  );
}
