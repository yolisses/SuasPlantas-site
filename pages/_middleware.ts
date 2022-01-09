import type { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev:NextFetchEvent) {
  console.log(req);
  console.log(ev);
  console.log(req.headers);
}
