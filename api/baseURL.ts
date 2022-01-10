import { isDev } from '../utils/isDev';

const useDevApi = false;

export const baseURL = useDevApi && isDev
  ? process.env.NEXT_PUBLIC_DEV_API_URL
  : process.env.NEXT_PUBLIC_API_URL;
