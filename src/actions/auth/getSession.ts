'use server';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { sign, verify } from './utils';

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  if (!session) return null;
  return await verify(session);
}

export async function updateSession(request: NextRequest) {
const session = request.cookies.get('session')?.value;
if (!session) return;

// Refresh the session so it doesn't expire
const parsed = await verify(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: 'session',
    value: await sign(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
