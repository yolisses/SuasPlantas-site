import { setCookie } from 'nookies';
import { api } from '../api/api';
import { authStore } from './authStore';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { provider, accessToken });
  const token = res.headers.authorization;
  authStore.setUser(res.data);
  setCookie(undefined, 'connect.sid', token);
  return token;
}
