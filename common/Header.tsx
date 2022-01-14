import {
  Menu,
  Button,
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
import { SearchField } from '../search/SearchField';
import { RequireLogin } from '../auth/RequireLogin';
import { filterStore } from '../search/filtersStore';

function Space() {
  return <div className="pl-2" />;
}

export function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searching, setSearching] = useState(false);

  return (
    <HeaderLayout className="bg-emerald-700 text-white shadow-md" goBackButton={false}>
      {!searching ? (
        <>
          <Link href="/">
            <a>
              <Button onClick={() => { filterStore.query = {}; }}>
                <div className="flex flex-row items-center gap-1">
                  <div className="text-lg cursor-pointer text-white">SuasPlantas</div>
                </div>
              </Button>
            </a>
          </Link>
          <div
            className="hidden md:flex flex-row justify-center w-full"
          >
            <SearchField />
          </div>
          <IconButton
            className="md:hidden ml-auto"
            onClick={() => setSearching(true)}
          >
            <FaSearch
              size={23}
              color="white"
            />
          </IconButton>
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
        </>
      )
        : (
          <>
            <SearchField />
            <IconButton
              onClick={() => setSearching(false)}
            >
              <FaTimes color="white" size={25} />
            </IconButton>
          </>
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
          <Link href={`/users/${authStore.user?.id}`}>
            <a>
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
          </Link>
          <Link href="/privacy-policy">
            <a>
              <MenuItem onClick={handleClose}>
                <FaRegFile size={20} color="gray" />
                <Space />
                Política de privacidade
              </MenuItem>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <MenuItem onClick={handleClose}>
                <FaRegCommentAlt size={20} color="gray" />
                <Space />
                Contato
              </MenuItem>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <MenuItem onClick={handleClose}>
                <FaSeedling size={20} color="gray" />
                <Space />
                Sobre
              </MenuItem>
            </a>
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
