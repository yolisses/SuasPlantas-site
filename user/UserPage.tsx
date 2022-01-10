import Image from 'next/image';
import { Button, Link } from '@mui/material';
import { FaRegUser } from 'react-icons/fa';
import { useEffect } from 'react';
import { User } from './User';
import { GridItem } from '../common/GridItem';
import { authStore } from '../auth/authStore';
import { userImage } from '../images/user';
import { WhatsappButton } from '../contact/WhatsappButton';
import { InstagramButton } from '../contact/InstagramButton';
import { Header } from '../common/Header';
import { api } from '../api/api';
import { hasContact } from '../utils/hasContact';
import { isSelfUser } from '../utils/isSelfUser';
import { TextLink } from '../common/TextLink';

interface UserPageProps {
  user: User;
}

export function UserPage({ user }: UserPageProps) {
  async function refreshUser() {
    const res = await api.get(`users/${user.id}`);
    authStore.user = res.data;
  }

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* <HeaderLayout className="shadow-sm">{user.name}</HeaderLayout> */}
      <Header />
      <div className="p-2 flex flex-col gap-4 max-w-4xl">
        <div className="flex flex-row gap-2 items-center pt-4">
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={user.image || userImage}
            className="rounded-full bg-cover w-24 h-24"
          />
          <div className="flex-1 flex-wrap flex overflow-ellipsis">
            <div className="flex flex-col w-full">
              <div className="overflow-ellipsis text-lg">{user.name}</div>
              <div className="overflow-ellipsis">{`${user.city}, ${user.state}`}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center gap-2">
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
          { user.description}
        </div>
        {authStore.user?.id === user.id && (
        <Link href="/account/edit">
          <Button variant="outlined" className="flex flex-row gap-1 w-full max-w-sm">
            <FaRegUser size={18} />
            Editar perfil
          </Button>
        </Link>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 items-start">
          {user.plants?.map((plant) => (
            <GridItem item={plant} key={plant.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
