import { useRouter } from 'next/router';
import { Header } from './Header';
import { hideHeader } from './hideHeader';
import { LoginHeader } from './LoginHeader';
import { useUser } from '../auth/userContext';

export function HeaderSelector() {
  const { user } = useUser();
  const { asPath } = useRouter();

  if (hideHeader[asPath]) return null;
  if (user) { return <Header />; }
  return <LoginHeader />;
}
