import Link from 'next/link';
import Image from 'next/image';
import { Plant } from '../plant/Plant';
import { AvailabilityInfo } from '../plant/AvailabilityInfo';

interface GridItemDTO {
  item: Plant;
  size?:number
  showLocation?:boolean
}

export function GridItem({ item, size: sizeParam, showLocation = true }: GridItemDTO) {
  const {
    swap, donate, price, card,
  } = item;

  const size = sizeParam || 200;
  return (
    <Link href={`/plants/${item.id}`}>
      <a className="highlight rounded-xl">
        <div className="flex flex-col">
          <Image
            src={card}
            width={size}
            height={size}
            alt={item.name}
            objectFit="cover"
            className="bg-gray-200 flex-shrink-0 rounded-xl"
          />
          <div className="px-2 pb-1">
            <div>{item.name}</div>
            <AvailabilityInfo {...{ swap, donate, price }} />
            {showLocation && (
            <div className="text-sm">
              {item.city}
              ,
              {' '}
              {item.state}
            </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
