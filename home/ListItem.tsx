const link =
  "https://unsplash.com/photos/fIoQ-aRycys/download?force=true&w=640";

import Image from "next/image";

export function ListItem() {
  return (
    <div className="px-1 pb-1 flex flex-row">
      <Image
        alt=""
        width={140}
        height={140}
        src={link}
        className="rounded-xl bg-gray-200"
      />
      <div className="ml-2">Haworthia limifolia variedade ubomboensis</div>
    </div>
  );
}
