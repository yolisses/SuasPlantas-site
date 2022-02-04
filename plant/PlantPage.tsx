import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { FaPen } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { Plant } from './Plant';
import { tagEmoji } from './tags';
import { LikeButton } from './LikeButton';
import { UserLink } from '../user/UserLink';
import { useUser } from '../auth/userContext';
import { GridItem } from '../common/GridItem';
import { ShareButtons } from './ShareButtons';
import { hasContact } from '../utils/hasContact';
import { devIndicator } from '../utils/devIndicator';
import { WhatsappButton } from '../contact/WhatsappButton';
import { PlantStructuredData } from './PlantStructuredData';
import { InstagramButton } from '../contact/InstagramButton';
import { availabilitiesToString } from './availabilitiesToString';
import { PreviewIndicator } from '../preview/PreviewIndicator';

interface PlantPageProps{
  data:Plant
}

export function PlantPage({ data }:PlantPageProps) {
  const { user: currentUser } = useUser();

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

  const selfUser = user.id === currentUser?.id;

  const updatedAt = new Date(updatedAtString);

  const stringAvailability = availabilitiesToString({ price, swap, donate });

  const multipleImages = data.images.length > 1;
  const carousel = useRef<Carousel>();

  useEffect(() => {
    if (carousel && carousel.current) {
      carousel.current.moveTo(0);
    }
  }, [data.images]);

  return (
    <>
      <Head>
        <title>
          {`${devIndicator}${name} - ${stringAvailability}`}
        </title>
        <meta
          name="description"
          content={`Nome: ${name}, Disponível para ${stringAvailability}, Pertence a ${user.name}${description ? `, Descrição: ${description}` : ''}`}
        />
      </Head>
      <PlantStructuredData plant={data} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="md:w-1/2 flex-1 md:pt-2">
            <div className="sticky top-12">
              <Carousel
                emulateTouch
                showStatus={false}
                ref={carousel as any}
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
              {/* {JSON.stringify(data.images)} */}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="p-2 gap-4 flex flex-col">
              <div>
                <h1 className="text-2xl inline">{name}</h1>
                {' '}
                <PreviewIndicator />
                {/* <AvailabilityInfo {...{ swap, donate, price }} /> */}
              </div>
              <div className="flex flex-row w-full justify-center gap-2 max-w-md">
                {!!user.whatsappNumber && (
                <WhatsappButton whatsappNumber={user.whatsappNumber} />
                )}
                {!!user.instagramUsername && (
                <InstagramButton instagramUsername={user.instagramUsername} />
                )}
                {!hasContact(user) && (selfUser ? (
                  <div>
                    <Link href="/account/edit">
                      <a className="link">
                        Adicionar uma forma de contato para poder receber mensagens
                      </a>
                    </Link>
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
              <div className="flex flex-row justify-start">
                <UserLink user={data.user} />
              </div>
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
                  {/* {loremIpsum} */}
                </div>
              </div>
              )}
              <ShareButtons
                socialIconProps={{ size: 36, borderRadius: 100 }}
                shareUrl={`https://suasplantas.com/plants/${id}`}
              />
            </div>
            {currentUser?.id === data.user.id
            && (
            <div className="sticky bottom-0">
              <div className="absolute bottom-10 right-10">
                <Link href={`/plants/${data.id}/edit`}>
                  <a className="fab">
                    <FaPen size={22} color="white" />
                  </a>
                </Link>
              </div>
            </div>
            )}
          </div>
        </div>
        {!!(data.alsoSaw && data.alsoSaw.length)
      && (
        <div className="p-2 flex flex-col gap-2">
          <h2 className="text-lg">Outras pessoas também viram</h2>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-5 xl:grid-cols-7">
            {data.alsoSaw.map((plant:Plant) => <GridItem key={plant.id} item={plant} />)}
          </div>
        </div>
      )}
        {/* {loremIpsum} */}
      </div>
    </>
  );
}
