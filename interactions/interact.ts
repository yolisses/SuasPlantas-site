import { api } from '../api/api';
import { isDev } from '../utils/isDev';
import { isBrowserByUA } from './isBrowserByUA';

interface InteractData{
  type?:string
  [key:string]:any
}

export async function interact(data:InteractData) {
  const ua = window.navigator.userAgent;
  if (isDev && isBrowserByUA(ua)) return;
  return api.post('/interactions', data);
}
