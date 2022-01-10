import { authStore } from './authStore';

export function requireLogin(callback: ()=>any) {
  if (authStore.user) { return callback; }
  return () => {
    console.log('coisa required');
  };
}
