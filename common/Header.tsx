import {
  Button, IconButton, Menu, MenuItem,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaRegFile, FaSeedling } from 'react-icons/fa';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi';
import { authStore } from '../auth/authStore';
import { MeButton } from '../user/MeButton';
import { HeaderLayout } from './HeaderLayout';
import { userImage } from '../images/user';
import { logOut } from '../user/logOut';
import { RequireLogin } from '../auth/RequireLogin';

interface HeaderProps {
  searchQuery?: string;
}

function Space() {
  return <div className="pl-2" />;
}

export function Header({ searchQuery }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderLayout className="bg-green-700 text-white shadow-md" goBackButton={false}>
      <div className="mr-auto">
        <Link href="/">
          <Button>
            <div className="flex flex-row items-center gap-1">
              {/* <div className="self-stretch hidden sm:inline-flex flex justify-center">
              <Image src="/icon-white.png  " width={20} height={20} />
            </div> */}
              <div className="text-lg cursor-pointer text-white">SuasPlantas</div>
            </div>
          </Button>
        </Link>
      </div>
      {/* <SearchTop query={searchQuery} /> */}
      <div className="ml-auto" />
      <MeButton />
      <IconButton
        id="basic-button"
        aria-haspopup="true"
        onClick={handleClick}
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'basic-menu' : undefined}
      >
        <div className="p-1">
          <FaBars size={25} color="white" />
        </div>
      </IconButton>
      <div>
        <Menu
          open={open}
          id="basic-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link href={`/users/${authStore.user?.id}`}>
            <RequireLogin>
              <MenuItem onClick={handleClose}>
                <Image
                  width={20}
                  height={20}
                  src={authStore.user?.image || userImage}
                  alt={authStore.user?.name}
                  className="bg-gray-300 rounded-full cursor-pointer"
                />
                <Space />
                Perfil
              </MenuItem>
            </RequireLogin>
          </Link>
          <Link href="/privacy-policy">
            <MenuItem onClick={handleClose}>
              <FaRegFile size={20} color="gray" />
              <Space />
              Política de privacidade
            </MenuItem>
          </Link>
          <MenuItem onClick={handleClose}>
            <FaRegFile size={20} color="gray" />
            <Space />
            Termos de uso
          </MenuItem>
          <Link href="/about">
            <MenuItem onClick={handleClose}>
              <FaSeedling size={20} color="gray" />
              <Space />
              Sobre
            </MenuItem>
          </Link>
          {!!authStore.user && (
          <MenuItem onClick={() => { logOut(); handleClose(); }}>
            <FiLogOut size={20} color="gray" />
            <Space />
            Sair
          </MenuItem>
          )}
        </Menu>
      </div>
    </HeaderLayout>
  );
}
