import Image from 'next/image';
import {
  Button, Grid, Link,
} from '@mui/material';
import { FaRegUser, FaSeedling, FaThumbsUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
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

function TabSelector({
  children, index, tab, setTab,
}) {
  function handleClick() {
    setTab(index);
  }

  const selected = tab !== index;
  return (
    <Button
      className={`flex flex-row items-center h-11 px-8 justify-center gap-1 ${
        selected ? 'text-gray-400 border-b-0' : ''
      }`}
      style={!selected ? {
        borderStyle: 'solid', borderBottomWidth: 2, borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
      } : undefined}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export function UserPage({ user }: UserPageProps) {
  const [tab, setTab] = useState(0);

  async function refreshUser() {
    const res = await api.get(`users/${authStore.user?.id}`);
    authStore.user = res.data;
  }

  useEffect(() => {
    if (user.id === authStore.user?.id) { refreshUser(); }
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* <HeaderLayout className="shadow-sm">{user.name}</HeaderLayout> */}
      <Header />
      <div className="p-2 flex flex-col gap-4 max-w-4xl w-full">
        <div className="flex flex-row gap-2 items-center pt-4 w-full">
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
          <div className="flex flex-row justify-start">
            <Link href="/account/edit">
              <Button variant="outlined" className="flex flex-row gap-1 w-full max-w-sm">
                <FaRegUser size={18} />
                Editar perfil
              </Button>
            </Link>
          </div>
        )}
        <div className="flex flex-row justify-center items-center">
          <TabSelector index={0} tab={tab} setTab={setTab}>
            <FaSeedling />
            Plantas
          </TabSelector>
          <TabSelector index={1} tab={tab} setTab={setTab}>
            <FaThumbsUp />
            Curtidas
          </TabSelector>
        </div>
        {
          !user.plants.length && (
            <div className="text-gray-600">
              Sem nenhuma planta por enquanto
            </div>
          )
        }
        <Grid
          container
          columns={{ xs: 2, sm: 4, md: 5 }}
          style={{ display: tab !== 0 ? 'none' : undefined }}
        >
          {user.plants?.map((plant) => (
            <GridItem item={plant} key={plant.id} />
          ))}
        </Grid>
        {
          !user.likedPlants?.length && (
            <div className="text-gray-600">
              Sem nenhuma curtida por enquanto
            </div>
          )
        }
        <Grid
          container
          columns={{ xs: 2, sm: 4, md: 5 }}
          style={{ display: tab !== 1 ? 'none' : undefined }}
        >
          { user.likedPlants?.map((plant) => (
            <GridItem item={plant} key={plant.id} />
          ))}
        </Grid>
      </div>
    </div>
  );
}
