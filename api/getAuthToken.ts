import { parseCookies } from 'nookies';

export function getAuthToken() {
  const { 'suasplantas.token': token } = parseCookies();
  return token;
}
