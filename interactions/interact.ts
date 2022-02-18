import { api } from '../api/api';
import { isDev } from '../utils/isDev';

interface InteractData{
  type?:string
  [key:string]:any
}

export async function interact(data:InteractData) {
  if (isDev) return;
  return api.post('/interactions', data);
}
