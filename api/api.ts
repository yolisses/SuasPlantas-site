import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
  withCredentials: true,
});

api.interceptors.response.use(undefined, (error) => {
  throw new Error(
    JSON.stringify({
      status: error.response.status,
      message: error.response.data,
    }),
  );
});
