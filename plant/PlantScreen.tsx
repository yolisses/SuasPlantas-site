import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Head from 'next/head';
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
} from 'react-share';
import { Header } from '../common/Header';
import { Session } from './Session';
import { AvailabilityInfo } from './AvailabilityInfo';
import { availabilitiesToString } from './availabilitiesToString';
import { UserLink } from '../user/UserLink';
import { Plant } from '../types/Plant';
import { devIndicator } from '../utils/devIndicator';
import { tags } from './tags';

export function PlantScreen({ data }:{data:Plant}) {
  const {
    name,
    description,
    swap,
    donate,
    price,
    user,
    id,
    updatedAt: updatedAtString,
  } = data;

  const updatedAt = new Date(updatedAtString);

  const stringAvailability = availabilitiesToString({ price, swap, donate });

  const multipleImages = data.images.length > 1;

  const socialIconProps = {
    size: 36,
    borderRadius: 100,
  };

  const shareUrl = `https://suasplantas.com/plants/${id}`;

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
              showIndicators={false}
              showArrows={multipleImages}
              showThumbs={multipleImages}
              renderThumbs={() => {
                const SIZE = 70;
                return data.images.map(({ uri }) => (
                  <Image src={uri} width={SIZE} height={SIZE} objectFit="cover" key={uri} />
                ));
              }}
            >
              {data.images.map(({ uri }) => (
                <div className="flex flex-col h-full justify-center flex-1">
                  <Image src={uri} width={500} height={500} objectFit="contain" />
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
            <UserLink user={data.user} />
            <div>
              Última edição
              {' '}
              <time>{updatedAt.toLocaleDateString()}</time>
            </div>
            {!!data?.tags?.length && (
            <Session>
              <div className="flex flex-row flex-wrap gap-2">
                {data.tags.map(({ name }) => (
                  <div>
                    {tags.find((value) => value.text === name)?.emoji}
                    {' '}
                    {name}
                  </div>
                ))}
              </div>
            </Session>
            )}
            {!!description?.length && (
            <Session label="Descrição">
              <div>{description}</div>
              {/* <div>{loremIpsum}</div> */}
            </Session>
            )}
            <div className="mt-4">
              <div className="text-sm text-gray-500">Compartilhar</div>
              <div className="flex flex-row gap-1">
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon {...socialIconProps} />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon {...socialIconProps} />
                </WhatsappShareButton>
                <FacebookMessengerShareButton
                  url={shareUrl}
                  appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                >
                  <FacebookMessengerIcon {...socialIconProps} />
                </FacebookMessengerShareButton>
                <TelegramShareButton url={shareUrl}>
                  <TelegramIcon {...socialIconProps} />
                </TelegramShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {loremIpsum} */}
    </div>
  );
}
