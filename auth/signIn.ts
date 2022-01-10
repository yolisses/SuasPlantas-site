import { setCookie } from 'nookies';
import { api } from '../api/api';
import { authStore } from './authStore';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { provider, accessToken });
  const token = res.headers.authorization;
  api.defaults.headers.common.Authorization = token;
  setCookie(undefined, 'suasplantas.token', token, {
    path: '/',
  });
  authStore.setUser(res.data);
}
