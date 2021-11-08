import { Axios } from "axios";

export const api = new Axios({
  baseURL: process.env.API_URL + "/",
});
