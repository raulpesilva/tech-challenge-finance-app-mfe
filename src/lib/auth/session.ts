import { PublicUser } from '@/@types/users';
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { sessionExpires } from './constantes';
import { createToken, verifyToken } from './token';

export async function createCookieOptions(expires: Date): Promise<Partial<ResponseCookie>> {
  return { httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires };
}

export async function createSession(user: PublicUser) {
  const expiresAt = new Date(Date.now() + sessionExpires);
  const session = await createToken({ user, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set('session', session, await createCookieOptions(expiresAt));
}

export async function verifySession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('session')?.value;
  if (!cookie) return null;

  const session = await verifyToken(cookie);

  if (!session?.id) return null;
  const user: PublicUser = { id: session.id, name: session.name, email: session.email };
  return user;
}

export async function updateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  const payload = await verifyToken(session);

  if (!session || !payload) return null;
  const expires = new Date(Date.now() + sessionExpires);
  cookieStore.set('session', session, await createCookieOptions(expires));
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
