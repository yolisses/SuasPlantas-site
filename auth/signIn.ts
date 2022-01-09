import { api } from '../api/api';
import { authStore } from './authStore';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { provider, accessToken });
  const token = res.headers.authorization;
  authStore.setUser(res.data);
  authStore.setToken(token);
  document.cookie = `connectSid=${token};domain=.suasplantas.com`;
  document.cookie = `connectSid=${token};domain=suasplantas.herokuapp.com`;
  return token;
}
