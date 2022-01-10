import { destroyCookie } from 'nookies';
import { api } from '../api/api';
import { authStore } from '../auth/authStore';

export async function logOut() {
  authStore.user = undefined;
  destroyCookie(undefined, 'suasplantas.token', { path: '/' });
  delete api.defaults.headers.common.Authorization;
  return api.post('users/logout');
}
