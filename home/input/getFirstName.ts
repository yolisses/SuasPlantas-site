import { User } from '../../user/User';

export function getFirstName(user:User) {
  return user.name.split(' ')[0];
}
