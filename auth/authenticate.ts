import { parseCookies } from 'nookies';
import { api } from '../api/api';

export function authenticate(ctx:any) {
  const { 'suasplantas.token': token } = parseCookies(ctx);
  if (token) { api.defaults.headers.common.Authorization = token; }
  return token;
}
