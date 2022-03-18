import Link from 'next/link';
import Image from 'next/image';
import { Plant } from '../plant/Plant';
import { AlsoSaw } from '../plant/AlsoSaw';

interface PlantItemDTO {
  item: Plant&AlsoSaw
  size?:number
}

export function PlantItem({
  item, size: sizeParam,
}: PlantItemDTO) {
  const {
    card, id, name,
  } = item;

  const city = item.city || item.user.city;
  const state = item.state || item.user.state;

  const size = sizeParam || 200;
  return (
    <Link href={`/plants/${id}`}>
      <a className={`highlight rounded-xl flex flex-col ${!card ? 'bg-gray-100 justify-center py-3' : ''}`}>
        {!!card && (
        <Image
          src={card}
          width={size}
          height={size}
          alt={name}
          objectFit="cover"
          className="bg-gray-200 flex-shrink-0 rounded-xl"
        />
        )}
        <div className="px-2 pb-1 text-center">
          <span className={!card ? 'text-2xl' : 'text-lg'}>{name}</span>
          <div className="text-sm">
            {city}
            ,
            {' '}
            {state}
          </div>
        </div>
      </a>
    </Link>
  );
}
