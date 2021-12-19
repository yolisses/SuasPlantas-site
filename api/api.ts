import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/",
});

api.interceptors.response.use(undefined, (error) => {
  console.error("macaxeira");
  console.error(Object.keys(error));
  console.error(Object.keys(error.response));
  throw new Error(
    JSON.stringify({
      status: error.response.status,
      message: error.response,
    })
  );
});
