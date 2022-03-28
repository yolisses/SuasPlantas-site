import { useEffect } from 'react';
import { gtag } from './gtag';

export function GtagStarter() {
  useEffect(() => {
    gtag('js', new Date());
    gtag('config', 'G-SV4DSGVC8F');
  }, []);

  return null;
}
