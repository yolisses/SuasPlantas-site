import axios from 'axios';
import { parseCookies } from 'nookies';
import { baseURL } from './baseURL';

export const api = axios.create({
  baseURL,
});

const { 'suasplantas.token': token } = parseCookies();

if (token) {
  api.defaults.headers.common.Authorization = token;
}
