import {
  FaBars,
  FaRegFile,
  FaSeedling,
  FaRegCommentAlt,
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { Menu, MenuItem } from '@mui/material';
import { logOut } from '../user/logOut';
import { userImage } from '../images/user';
import { MeButton } from '../user/MeButton';
import { authStore } from '../auth/authStore';
import { HeaderLayout } from './HeaderLayout';
import { useItems } from '../home/ItemsContext';
import { RequireLogin } from '../auth/RequireLogin';
import { Spacer } from './Spacer';

function MenuSpacer() {
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

  return (
    <HeaderLayout className="bg-emerald-700 text-white shadow-md">
      <Link href="/">
        <a>
          <div
            className="text-lg cursor-pointer select-none hover:bg-green-500 hover:bg-opacity-30 p-2 rounded-lg"
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
      <Spacer />
      <MeButton />
      <button
        className="icon-button"
        id="basic-button"
        aria-haspopup="true"
        onClick={handleClick}
        aria-expanded={open ? 'true' : undefined}
        aria-controls={open ? 'basic-menu' : undefined}
      >
        <FaBars size={22} color="white" />
      </button>
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
                <MenuSpacer />
                Perfil
              </MenuItem>
            </RequireLogin>
          </a>
          <a href="/privacy-policy">
            <MenuItem onClick={handleClose}>
              <FaRegFile size={20} color="gray" />
              <MenuSpacer />
              Política de privacidade
            </MenuItem>
          </a>
          <a href="/contact">
            <MenuItem onClick={handleClose}>
              <FaRegCommentAlt size={20} color="gray" />
              <MenuSpacer />
              Contato
            </MenuItem>
          </a>
          <a href="/about">
            <MenuItem onClick={handleClose}>
              <FaSeedling size={20} color="gray" />
              <MenuSpacer />
              Sobre
            </MenuItem>
          </a>
          {!!authStore.user && (
            <MenuItem onClick={() => { logOut(); handleClose(); }}>
              <FiLogOut size={20} color="gray" />
              <MenuSpacer />
              Sair
            </MenuItem>
          )}
        </Menu>
      </div>
    </HeaderLayout>
  );
}
