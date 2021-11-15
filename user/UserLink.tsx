import { User } from "./User";
import Image from "next/image";
import Link from "next/link";

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
          src={user.image}
          className="rounded-full"
        />
        <div>{user.name}</div>
      </div>
    </Link>
  );
}