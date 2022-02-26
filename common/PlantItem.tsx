import Link from 'next/link';
import Image from 'next/image';
import { Plant } from '../plant/Plant';
import { PreviewIndicator } from '../preview/PreviewIndicator';

interface PlantItemDTO {
  item: Plant
  size?:number
}

export function PlantItem({
  item, size: sizeParam,
}: PlantItemDTO) {
  const { card, preview } = item;

  const size = sizeParam || 200;
  return (
    <Link href={`/plants/${item.id}`}>
      <a className={`highlight rounded-xl flex flex-col ${!card ? 'bg-gray-100 justify-center py-3' : ''}`}>
        {!!card && (
        <Image
          src={card}
          width={size}
          height={size}
          alt={item.name}
          objectFit="cover"
          className="bg-gray-200 flex-shrink-0 rounded-xl"
        />
        )}
        <div className="px-2 pb-1 text-center">
          <span className={`text-lg ${!card ? 'text-2xl' : ''}`}>{item.name}</span>
          {' '}
          {preview && <PreviewIndicator />}

          {/* <AvailabilityInfo {...{ swap, donate, price }} /> */}
          {(item.city || item.state) && (
            <div className="text-sm">
              {item.city}
              {!!item.city && ', '}
              {item.state}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}
