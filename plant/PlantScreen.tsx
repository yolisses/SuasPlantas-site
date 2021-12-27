import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Head from 'next/head';
import { loremIpsum } from '../mock/loremIpsum';
import { someImage, someImageH, someImageU } from '../mock/someImage';
import { Header } from '../common/Header';
import { Session } from './Session';
import { AvailabilityInfo } from './AvailabilityInfo';
import { availabilitiesToString } from './availabilitiesToString';
import { UserLink } from '../user/UserLink';
import { Plant } from '../types/Plant';
import { devIndicator } from '../utils/devIndicator';

export function PlantScreen({ data }:{data:Plant}) {
  const images = [
    someImage,
    someImageH,
    someImageU,
    someImage,
    someImage,
    someImageH,
  ];

  const {
    name,
    description,
    swap,
    donate,
    price,
    tags, user,
    updatedAt: updatedAtString,
  } = data;

  const updatedAt = new Date(updatedAtString);

  const stringAvailability = availabilitiesToString({ price, swap, donate });

  const multipleImages = data.images.length > 1;

  return (
    <div>
      <Head>
        <title>
          {`${devIndicator}${name} - ${stringAvailability}`}
        </title>
        <Head>
          <meta
            name="description"
            content={`Planta, Nome: ${name}, Disponível para ${stringAvailability}, Pertence a ${user.name}`}
          />
        </Head>
      </Head>
      <Header />
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="md:w-1/2 flex-1 md:pt-10">
          <div className="sticky top-12">
            <Carousel
              emulateTouch
              showStatus={false}
              showArrows={multipleImages}
              showThumbs={multipleImages}
              showIndicators={multipleImages}
              renderThumbs={() => {
                const SIZE = 70;
                return images.map((src) => <Image src={src} width={SIZE} height={SIZE} />);
              }}
            >
              {images.map((src) => (
                <div className="flex flex-col h-full justify-center flex-1">
                  <Image src={src} width={500} height={500} objectFit="contain" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="p-2 gap-4 flex flex-col">
            <Session>
              <h1 className="text-2xl">{name}</h1>
              <AvailabilityInfo {...{ swap, donate, price }} />
            </Session>
            {!!data.amount
                && (
                <div>
                  {data.amount}
                  {' '}
                  {data.amount === 1 ? 'disponível' : 'disponíves'}
                </div>
                )}
            {!!tags?.length && (
            <Session label="Marcado como">
              <div />
              {/* <TagsInfo tags={tags} /> */}
            </Session>
            )}
            <UserLink user={data.user} />
            <div>
              Última edição
              {' '}
              <time>{updatedAt.toLocaleDateString()}</time>
            </div>
            {!!description?.length && (
            <Session label="Descrição">
              <div>{description}</div>
              {/* <div>{loremIpsum}</div> */}
            </Session>
            )}
          </div>
        </div>
      </div>
      {/* {loremIpsum} */}
    </div>
  );
}
