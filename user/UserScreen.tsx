import Image from 'next/image';
import { Button, Link } from '@mui/material';
import { FaInstagram, FaRegUser, FaWhatsapp } from 'react-icons/fa';
import { HeaderLayout } from '../common/HeaderLayout';
import { loremIpsum } from '../mock/loremIpsum';
import { User } from './User';
import { GridItem } from '../common/GridItem';
import { authStore } from '../auth/authStore';
import { userImage } from '../images/user';
import { ContactButton } from '../contact/ContactButton';

interface UserScreenProps {
  user: User;
}

const instagramColors = [
  // '#405DE6',
  '#5B51D8',
  '#833AB4',
  '#C13584',
  '#E1306C',
  // '#FD1D1D',
  // '#F56040',
  '#F77737',
  // '#FCAF45',
  '#FFDC80',
];

const whatsappColors = [
  // '#00E065',
  '#00D15e',
  '#00a74b',
  '#00a43c',
];

const instagramGradient = `linear-gradient(to left bottom${instagramColors.reduce((previous, current) => `${previous}, ${current}`, '')})`;
const whatsappGradient = `linear-gradient(to bottom left${whatsappColors.reduce((previous, current) => `${previous}, ${current}`, '')})`;

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
              {authStore.user?.id === user.id && (
                <Link href="/account/edit">
                  <Button variant="outlined" className="flex flex-row gap-1 w-full max-w-sm">
                    <FaRegUser size={18} />
                    Editar perfil
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center gap-2">
          {!!user.whatsappNumber && (
          <ContactButton
            gradient={whatsappGradient}
            Icon={FaWhatsapp}
            text="Whatsapp"
            href={`https://api.whatsapp.com/send?phone=${user.whatsappNumber}`}
          />
          )}
          {!!user.instagramUsername && (
          <ContactButton
            gradient={instagramGradient}
            Icon={FaInstagram}
            text="Instagram"
            href={`https://instagram.com/${user.instagramUsername}`}
          />
          )}
        </div>
        <div>
          { user.description || loremIpsum.slice(0, 1000)}
        </div>
        <div className="flex flex-row flex-1 items-center gap-2 justify-between p-2 max-w-sm">
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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 items-start">
          {user.plants?.map((plant) => (
            <GridItem item={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}
