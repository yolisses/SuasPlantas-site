import { api } from '../api/api';
import { authStore } from '../auth/authStore';

export async function logOut() {
  authStore.user = undefined;
  authStore.token = undefined;
  return api.post('users/logout');
}
