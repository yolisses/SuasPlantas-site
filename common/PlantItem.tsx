import Link from 'next/link';
import Image from 'next/image';
import { AlsoSaw } from '../plant/AlsoSaw';

interface PlantItemDTO {
  item: AlsoSaw
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
          alt={name}
          width={size}
          height={size}
          objectFit="cover"
          className="bg-gray-200 rounded-xl"
        />
        )}
        <div className="px-2 pb-1 text-center overflow-x-hidden text-ellipsis">
          <span className={`${
            card
              ? 'text-lg whitespace-nowrap overflow-x-hidden'
              : 'text-2xl'
          }`}
          >
            {name}
          </span>
          {(city || state) && (
          <div className="text-sm">
            {city}
            ,
            {' '}
            {state}
          </div>
          )}
        </div>
      </a>
    </Link>
  );
}
