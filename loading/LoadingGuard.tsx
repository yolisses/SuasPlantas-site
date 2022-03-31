import { useUser } from '../auth/UserContext';
import { LoadingPage } from './LoadingPage';

interface LoadingGuardProps{
    children:JSX.Element
}

export function LoadingGuard({ children }:LoadingGuardProps) {
  const { loading } = useUser();

  if (loading) return <LoadingPage />;
  return children;
}
