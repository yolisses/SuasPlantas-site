import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Head from 'next/head';

import Link from 'next/link';
import { Fab } from '@mui/material';
import { FaPen } from 'react-icons/fa';

import { tagEmoji } from './tags';
import { Plant } from '../types/Plant';
import { Header } from '../common/Header';
import { UserLink } from '../user/UserLink';
import { authStore } from '../auth/authStore';
import { ShareButtons } from './ShareButtons';
import { devIndicator } from '../utils/devIndicator';
import { AvailabilityInfo } from './AvailabilityInfo';
import { availabilitiesToString } from './availabilitiesToString';
import { WhatsappButton } from '../contact/WhatsappButton';
import { InstagramButton } from '../contact/InstagramButton';
import { TextLink } from '../common/TextLink';
import { hasContact } from '../utils/hasContact';
import { isSelfUser } from '../utils/isSelfUser';
import { LikeButton } from './LikeButton';

export function PlantPage({ data }:{data:Plant}) {
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
        <div className="md:w-1/2 flex-1 md:pt-2">
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
                    <Image src={uri} alt={name} width={SIZE} height={SIZE} objectFit="contain" key={uri} />
                  </div>
                );
              })}
            </Carousel>
            {/* {data.images[0].uri} */}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="p-2 gap-4 flex flex-col">
            <div>
              <h1 className="text-2xl">{name}</h1>
              <AvailabilityInfo {...{ swap, donate, price }} />
            </div>
            <div className="flex flex-row w-full justify-center gap-2 max-w-md">
              {!!user.whatsappNumber && (
              <WhatsappButton whatsappNumber={user.whatsappNumber} />
              )}
              {!!user.instagramUsername && (
              <InstagramButton instagramUsername={user.instagramUsername} />
              )}
              {!hasContact(user) && (
                isSelfUser(user) ? (
                  <div>
                    <TextLink href="/account/edit">
                      Adicionar uma forma de contato para poder receber mensagens
                    </TextLink>
                  </div>
                ) : (
                  <div className="text-gray-500 text-sm">
                    Sem meios de contato
                  </div>
                ))}
            </div>
            <div>
              <LikeButton url={`plants/${id}/like`} active={data.liked} />
            </div>
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
              <div className="flex flex-row flex-wrap gap-2">
                {data.tags.map(({ name }) => (
                  <div>
                    {tagEmoji[name]}
                    {' '}
                    {name}
                  </div>
                ))}
              </div>
            )}
            {!!description?.length && (
              <div>
                Descrição
                <div>
                  {description}
                </div>
              </div>
            )}
            <ShareButtons
              socialIconProps={{ size: 36, borderRadius: 100 }}
              shareUrl={`https://suasplantas.com/plants/${id}`}
            />
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
