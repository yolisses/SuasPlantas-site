import { authStore } from '../auth/authStore';
import { User } from '../user/User';

export function isSelfUser(user: User) {
  return authStore.user?.id === user.id;
}
