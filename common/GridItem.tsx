import Image from 'next/image';
import Link from 'next/link';
import { CardActionArea } from '@mui/material';
import { Plant } from '../types/Plant';
import { AvailabilityInfo } from '../plant/AvailabilityInfo';

interface GridItemDTO {
  item: Plant;
}

export function GridItem({ item }: GridItemDTO) {
  const {
    swap, donate, price, card,
  } = item;
  return (
    <Link href={`/plants/${item.id}`}>
      <CardActionArea className="rounded-xl">
        <div className="flex flex-col">
          <Image
            width={400}
            height={400}
            src={card}
            objectFit="cover"
            alt={item.name}
            className="bg-gray-200 flex-shrink-0 rounded-xl"
          />
          <div>{item.name}</div>
          <AvailabilityInfo {...{ swap, donate, price }} />
        </div>
      </CardActionArea>
    </Link>
  );
}
