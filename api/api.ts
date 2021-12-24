import axios from 'axios';
import { authStore } from '../auth/authStore';
import { isDev } from '../utils/isDev';

const useDevApi = true;
const baseUrl = isDev && useDevApi
  ? process.env.NEXT_PUBLIC_DEV_API_URL
  : process.env.NEXT_PUBLIC_API_URL;

console.log(baseUrl);

export const api = axios.create({
  baseURL: `${baseUrl}/`,
  withCredentials: true,
});

api.interceptors.request.use((req) => {
  if (authStore.token) {
    // req.headers!.authorization = authStore.token;
  }
  return req;
});

api.interceptors.response.use(undefined, (error) => {
  console.error(Object.keys(error));
  throw new Error(
    JSON.stringify({
      status: error?.response?.status,
      message: error?.response?.data || error?.reason || error?.message,
    }),
  );
});
