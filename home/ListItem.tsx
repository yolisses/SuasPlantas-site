const link =
  "https://unsplash.com/photos/fIoQ-aRycys/download?force=true&w=640";

import Image from "next/image";

export function ListItem() {
  return (
    <div className="px-2 pb-2 flex flex-row">
      <Image
        alt=""
        width={160}
        height={160}
        src={link}
        className="rounded-xl"
      />
      <div className="ml-2 text-xl">
        Haworthia limifolia variedade ubomboensis
      </div>
    </div>
  );
}
