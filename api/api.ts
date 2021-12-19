import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/",
});

api.interceptors.response.use(undefined, (error) => {
  throw new Error(
    JSON.stringify({
      status: error.response.status,
      message: error.response.data,
    })
  );
});
