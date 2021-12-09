import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import { someImage } from "../mock/someImage";

export function MeButton() {
  const query = gql`
    {
      me {
        id
        picture
      }
    }
  `;

  const { data } = useQuery(query);

  const size = 39;
  return (
    <Image
      width={size}
      height={size}
      src={data?.me.picture || someImage}
      className="bg-gray-300 rounded-full"
    />
  );
}
