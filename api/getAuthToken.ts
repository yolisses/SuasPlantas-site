import { parseCookies } from 'nookies';

export function getAuthToken() {
  const { authToken } = parseCookies();
  return authToken;
}
