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
import Link from 'next/link';
import { Fab } from '@mui/material';
import { FaEdit, FaPen } from 'react-icons/fa';
import { Header } from '../common/Header';
import { Session } from './Session';
import { AvailabilityInfo } from './AvailabilityInfo';
import { availabilitiesToString } from './availabilitiesToString';
import { UserLink } from '../user/UserLink';
import { Plant } from '../types/Plant';
import { devIndicator } from '../utils/devIndicator';
import { tagEmoji, tags } from './tags';
import { authStore } from '../auth/authStore';

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
        <meta
          name="description"
          content={`Nome: ${name}, Disponível para ${stringAvailability}, Pertence a ${user.name}${description ? `, Descrição: ${description}` : ''}`}
        />
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
                  <Image src={uri} alt={name} width={SIZE} height={SIZE} objectFit="cover" key={uri} />
                ));
              }}
            >
              {data.images.map(({ uri }) => {
                const SIZE = 500;
                return (
                  <div className="flex flex-col h-full justify-center flex-1">
                    <Image src={uri} alt={name} width={SIZE} height={SIZE} objectFit="contain" />
                  </div>
                );
              })}
            </Carousel>
            {/* {data.images[0].uri} */}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="p-2 gap-4 flex flex-col">
            <Session>
              <h1 className="text-2xl">{name}</h1>
              <AvailabilityInfo {...{ swap, donate, price }} />
            </Session>
            <UserLink user={data.user} />
            <div className="text-sm text-gray-500">
              Última edição
              {' '}
              <time>{updatedAt.toLocaleDateString()}</time>
            </div>
            {!!data.amount
                && (
                <div>
                  {data.amount}
                  {' '}
                  {data.amount === 1 ? 'disponível' : 'disponíves'}
                </div>
                )}
            {!!data?.tags?.length && (
            <Session>
              <div className="flex flex-row flex-wrap gap-2">
                {data.tags.map(({ name }) => (
                  <div>
                    {tagEmoji[name]}
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
                  appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string}
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
      {authStore.user?.id === data.user.id
      && (
      <div className="fixed right-10 bottom-10">
        <Link href={`/plants/${data.id}/edit`}>
          <Fab color="primary" aria-label="add">
            <FaPen size={22} color="white" />
          </Fab>
        </Link>
      </div>
      )}
    </div>
  );
}
