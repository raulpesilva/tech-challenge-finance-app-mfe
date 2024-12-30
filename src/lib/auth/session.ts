import { PublicUser } from '@/@types/users';
import type { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { createToken, verifyToken } from './token';
import { getSessionExpires } from './utils';

const createCookieOptions = (expires: Date): Partial<ResponseCookie> => {
  return { httpOnly: true, secure: true, sameSite: 'lax', path: '/', expires };
};

export async function createSession(user: PublicUser) {
  const expiresAt = await getSessionExpires();
  const session = await createToken({ user, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set('session', session, createCookieOptions(expiresAt));
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

// export async function updateSession(request: NextRequest) {
//   const session = request.cookies.get('session')?.value;
//   if (!session) return;

//   // Refresh the session so it doesn't expire
//   const parsed = await verify(session);
//   parsed.expires = new Date(Date.now() + 10 * 1000);
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: 'session',
//     value: await sign(parsed),
//     httpOnly: true,
//     expires: parsed.expires,
//   });
//   return res;
// }

export async function updateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;
  const payload = await verifyToken(session);

  if (!session || !payload) return null;
  const expires = await getSessionExpires();
  cookieStore.set('session', session, createCookieOptions(expires));
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
