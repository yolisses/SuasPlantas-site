const link =
  "https://unsplash.com/photos/fIoQ-aRycys/download?force=true&w=640";

import Image from "next/image";

export function ListItem() {
  return (
    <div className="mx-1 mb-1 flex flex-row">
      <Image
        alt=""
        width={200}
        height={200}
        src={link}
        className="rounded-xl bg-gray-200"
      />
      <div className="ml-2">Haworthia limifolia variedade ubomboensis</div>
    </div>
  );
}
