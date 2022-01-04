import Image from 'next/image';
import { Button, Link } from '@mui/material';
import { FaRegUser } from 'react-icons/fa';
import { HeaderLayout } from '../common/HeaderLayout';
import { loremIpsum } from '../mock/loremIpsum';
import { User } from './User';
import { GridItem } from '../common/GridItem';
import { authStore } from '../auth/authStore';
import { userImage } from '../images/user';
import { WhatsappButton } from '../contact/WhatsappButton';
import { InstagramButton } from '../contact/InstagramButton';

interface UserScreenProps {
  user: User;
}

export function UserScreen({ user }: UserScreenProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderLayout className="shadow-sm">{user.name}</HeaderLayout>
      <div className="p-2 flex flex-col gap-4 max-w-4xl">
        <div className="flex flex-row gap-2 items-center">
          <Image
            className="rounded-full bg-cover w-24 h-24 object-cover"
            src={user.image || userImage}
            height={100}
            width={100}
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
          {(!user.whatsappNumber && !user.instagramUsername)
          && (
          <div>
            <Link href="/account/edit">
              Adicionar uma forma de contato para poder receber mensagens
            </Link>
          </div>
          )}
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
        {/* <div className="flex flex-row flex-1 items-center gap-2 justify-between p-2 max-w-sm">
          <div>
            <strong>12</strong>
            {' '}
            postagens
          </div>
          <div>
            <strong>10</strong>
            {' '}
            seguindo
          </div>
          <div>
            <strong>10</strong>
            {' '}
            seguidores
          </div>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 items-start">
          {user.plants?.map((plant) => (
            <GridItem item={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}
