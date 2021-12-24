import { api } from '../api/api';
import { authStore } from './authStore';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { accessToken });
  console.log(res.data);
  authStore.setUser(res.data);
  const token = 's:tnkN_D6JQ_ydKWdsMQVRaTvtAA85Qqk2.Md5ms8fLzxfLIs/XdGBeehlBcTFe20t1pj3eHVmymMs';
  authStore.setToken(token);
  return token;
}
