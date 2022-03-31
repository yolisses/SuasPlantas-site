import { LoadingPage } from './LoadingPage';

interface LoadingGuardProps{
    children:JSX.Element
}

export function LoadingGuard({ children }:LoadingGuardProps) {
  const loading = true;

  if (loading) return <LoadingPage />;
  return children;
}
