import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any
  }
}

export function GoogleOptimizeHydrate() {
  useEffect(() => {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({ event: 'optimize.activate' });
      }
    } catch (err) {
      console.error(err);
    }
  });

  return null;
}
