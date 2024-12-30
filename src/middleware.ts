import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
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
  const cookie = cookieStore.get('session')?.value;

  const session = await verifyToken(cookie);
  const userId = session?.id;

  // TODO: somehow this is not working, so need to investigate
  // if (session && userId) await updateSession();

  const logoutURL = new URL('/logout', req.nextUrl);
  if (isProtectedRoute && !userId) return NextResponse.redirect(logoutURL);

  const dashboardURL = new URL('/dashboard', req.nextUrl);
  if (isPublicRoute && userId) return NextResponse.redirect(dashboardURL);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
