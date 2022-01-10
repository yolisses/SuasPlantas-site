import { authStore } from '../auth/authStore';

export const logged = !!authStore.user;
