import { api } from '../api/api';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  return api.post('users', { accessToken });
}
