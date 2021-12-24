import Image from 'next/image';
import Link from 'next/link';
import { someImage } from '../mock/someImage';
import { Plant } from '../types/Plant';
import { AvailabilityInfo } from '../show/AvailabilityInfo';

interface GridItemDTO {
  item: Plant;
}

export function GridItem({ item }: GridItemDTO) {
  const {
    name, description, swap, donate, price, card,
  } = item;
  return (
    <Link href={`/plants/${item.id}`}>
      <div className="flex flex-col">
        <Image
          width={400}
          height={400}
          src={card}
          objectFit="cover"
          className="bg-gray-200 flex-shrink-0 rounded-xl"
        />
        <div>{item.name}</div>
        <AvailabilityInfo {...{ swap, donate, price }} />
      </div>
    </Link>
  );
}
