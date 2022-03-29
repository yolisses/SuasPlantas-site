import { useUser } from '../../auth/userContext';
import { getFirstName } from './getFirstName';

export function useVocative() {
  const { user } = useUser();
  const vocative = user ? `, ${getFirstName(user)}` : '';
  return { vocative };
}
