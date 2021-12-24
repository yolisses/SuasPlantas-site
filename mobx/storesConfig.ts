import { create } from 'mobx-persist';
import { timerStore } from './teste';
import { isBrowser } from '../utils/isBrowser';
import { authStore } from '../auth/authStore';

export const stores:{[key:string]:any} = {
  authStore,
  timerStore,
};

if (isBrowser) {
  const hydrate = create();
  for (const key in stores) {
    hydrate(key, stores[key]);
  }
}
