import { isDev } from '../utils/isDev';

export function blockMiddleware() {
  if (!isDev) return new Response('Unauthorized');
}
