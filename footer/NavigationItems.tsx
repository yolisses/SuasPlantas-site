import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  FaMap,
  FaHome,
  FaCommentAlt,
} from 'react-icons/fa';
import { ProfileThumb } from './ProfileThumb';

export interface NavigationItem{
  id:string
  text:string
  href?:string
  Icon?:IconType
  asIcon?:ReactNode
}

export const navigationItems:NavigationItem[] = [
  {
    href: '/',
    id: 'home',
    Icon: FaHome,
    text: 'início',
  },
  {
    id: 'map',
    Icon: FaMap,
    text: 'mapa',
    href: '/map',
  },
  {
    id: 'chats',
    href: '/chat',
    text: 'conversas',
    Icon: FaCommentAlt,
  },
  {
    id: 'user',
    text: 'perfil',
    asIcon: <ProfileThumb />,
  },
];
