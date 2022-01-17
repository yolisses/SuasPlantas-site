import {
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegFile,
  FaSeedling,
  FaRegCommentAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { logOut } from '../user/logOut';
import { userImage } from '../images/user';
import { MeButton } from '../user/MeButton';
import { authStore } from '../auth/authStore';
import { HeaderLayout } from './HeaderLayout';
import { useItems } from '../home/ItemsContext';
import { SearchField } from '../search/SearchField';
import { RequireLogin } from '../auth/RequireLogin';

function Space() {
  return <div className="pl-2" />;
}

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { reset, setFilters } = useItems();
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searching, setSearching] = useState(false);

  return (
    <HeaderLayout className="bg-emerald-700 text-white shadow-md">
      {!searching ? (
        <>
          <Link href="/">
            <a>
              <div
                className="text-lg cursor-pointer text-white select-none"
                onClick={() => {
                  if (window.location.pathname === '/') {
                    reset();
                    setFilters({});
                  }
                }}
              >
                SuasPlantas
              </div>
            </a>
          </Link>
          <div className="hidden md:flex flex-row justify-center w-full">
            <SearchField />
          </div>
          <div className="ml-auto md:hidden">
            <IconButton
              onClick={() => setSearching(true)}
            >
              <FaSearch
                size={22}
                color="white"
              />
            </IconButton>
          </div>
          <MeButton />
          <IconButton
            id="basic-button"
            aria-haspopup="true"
            onClick={handleClick}
            aria-expanded={open ? 'true' : undefined}
            aria-controls={open ? 'basic-menu' : undefined}
          >
            <FaBars size={25} color="white" />
          </IconButton>
        </>
      )
        : (
          <div className="flex flex-row justify-center w-full items-center ">
            <SearchField />
            <IconButton
              onClick={() => setSearching(false)}
            >
              <FaTimes color="white" size={25} />
            </IconButton>
          </div>
        )}
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
          <a href={`/users/${authStore.user?.id}`}>
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
          </a>
          <a href="/privacy-policy">
            <MenuItem onClick={handleClose}>
              <FaRegFile size={20} color="gray" />
              <Space />
              Política de privacidade
            </MenuItem>
          </a>
          <a href="/contact">
            <MenuItem onClick={handleClose}>
              <FaRegCommentAlt size={20} color="gray" />
              <Space />
              Contato
            </MenuItem>
          </a>
          <a href="/about">
            <MenuItem onClick={handleClose}>
              <FaSeedling size={20} color="gray" />
              <Space />
              Sobre
            </MenuItem>
          </a>
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
