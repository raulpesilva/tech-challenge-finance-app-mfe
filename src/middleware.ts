import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './lib/auth/session';
import { verifyToken } from './lib/auth/token';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/register', '/'];

export default async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.set('x-current-path', req.nextUrl.pathname);

  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;

  const payload = await verifyToken(session);
  const userId = payload?.id;

  const loginURL = new URL('/login', req.nextUrl);
  if (isProtectedRoute && !userId) return NextResponse.redirect(loginURL);

  await updateSession();

  const dashboardURL = new URL('/dashboard', req.nextUrl);
  if (isPublicRoute && userId) return NextResponse.redirect(dashboardURL);

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
