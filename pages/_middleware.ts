import type { NextFetchEvent, NextRequest } from 'next/server';
import { authenticate } from '../auth/authenticate';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  authenticate({ req });
}
