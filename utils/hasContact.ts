import { User } from '../user/User';

export function hasContact(user:User) {
  return !!(user.whatsappNumber && user.instagramUsername);
}
