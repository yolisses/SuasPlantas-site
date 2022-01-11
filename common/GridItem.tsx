import Image from 'next/image';
import Link from 'next/link';
import { CardActionArea, Grid } from '@mui/material';
import { Plant } from '../plant/Plant';
import { AvailabilityInfo } from '../plant/AvailabilityInfo';

interface GridItemDTO {
  item: Plant;
}

export function GridItem({ item }: GridItemDTO) {
  const {
    swap, donate, price, card,
  } = item;

  const size = 200;
  return (
    <Grid item xs={1}>
      <Link href={`/plants/${item.id}`}>
        <CardActionArea className="rounded-xl">
          <div className="flex flex-col p-2">
            <Image
              src={card}
              width={size}
              height={size}
              alt={item.name}
              objectFit="cover"
              className="bg-gray-200 flex-shrink-0 rounded-xl"
            />
            <div>{item.name}</div>
            <AvailabilityInfo {...{ swap, donate, price }} />
          </div>
        </CardActionArea>
      </Link>
    </Grid>
  );
}
