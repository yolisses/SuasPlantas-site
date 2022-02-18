import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { interact } from './interact';

export function ChangePageInteract() {
  const Router = useRouter();
  const path = Router.pathname;

  useEffect(() => {
    interact({ type: 'load page', path });
  }, [
    path,
  ]);

  return null;
}
