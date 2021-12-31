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
    req.headers!.authorization = authStore.token;
  }
  return req;
});

export class BasicError {
  constructor(public status:Number, public message:string) {}
}

api.interceptors.response.use(undefined, (error) => {
  const basicError = new BasicError(
    error?.response?.status,
    error?.response?.data || error?.reason || error?.message || 'Erro desconhecido',
  );
  try {
    console.log(JSON.stringify(basicError));
  } catch (err) {
    console.error(basicError);
  }
  throw basicError;
});
