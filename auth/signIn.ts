import { api } from '../api/api';

export async function signIn(
  provider: 'google' | 'facebook',
  accessToken: string,
) {
  const res = await api.post('users', { accessToken });
  const token = 's:tnkN_D6JQ_ydKWdsMQVRaTvtAA85Qqk2.Md5ms8fLzxfLIs/XdGBeehlBcTFe20t1pj3eHVmymMs';
  console.log(token);
  localStorage.setItem('token', token);
  return token;
}
