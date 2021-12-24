import { authStore } from '../auth/authStore';

export function DevScreen() {
  return (
    <div>
      {JSON.stringify(authStore.user) || 'sem user'}
    </div>
  );
}
