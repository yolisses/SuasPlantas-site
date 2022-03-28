import { useEffect } from 'react';

export function googleOptimizeHydrate() {
  try {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'optimize.activate' });
    }
  } catch (err) {
    console.error(err);
  }
}

export function useGoogleOptimizeHydrate() {
  return useEffect(googleOptimizeHydrate);
}

export function GoogleOptimizeHydrate() {
  useGoogleOptimizeHydrate();
  return null;
}
