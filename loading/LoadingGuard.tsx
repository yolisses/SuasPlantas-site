import { getAuthToken } from '../api/getAuthToken';
import { useUser } from '../auth/UserContext';
import { LoadingPage } from './LoadingPage';

interface LoadingGuardProps{
    children:JSX.Element
}

export function LoadingGuard({ children }:LoadingGuardProps) {
  const authToken = getAuthToken();
  const { user } = useUser();

  if (authToken && !user) return <LoadingPage />;

  return children;
}
