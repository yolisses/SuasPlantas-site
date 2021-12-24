import { api } from '../api/api';
import { authStore } from './authStore';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { accessToken });
  const token = res.headers.authorization;
  authStore.setUser(res.data);
  authStore.setToken(token);
  return token;
}
