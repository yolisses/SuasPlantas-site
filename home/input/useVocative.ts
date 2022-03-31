import { useUser } from '../../auth/UserContext';
import { getFirstName } from './getFirstName';

export function useVocative() {
  const { user } = useUser();
  const vocative = user ? `, ${getFirstName(user)}` : '';
  return { vocative };
}
