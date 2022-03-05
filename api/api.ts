import axios from 'axios';
import { baseURL } from './baseURL';
import { getAuthToken } from './getAuthToken';

export const api = axios.create({
  baseURL,
});

const token = getAuthToken();
if (token) {
  api.defaults.headers.common.Authorization = token;
}
