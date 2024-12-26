import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { verify } from './lib/session';

// 1. Specify protected and public routes
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

  const session = await verify(cookie);
  const userId = session?.user?.id;

  const logoutURL = new URL('/logout', req.nextUrl);
  if (isProtectedRoute && !userId) return NextResponse.redirect(logoutURL);

  const dashboardURL = new URL('/dashboard', req.nextUrl);
  if (isPublicRoute && userId && !path.startsWith('/dashboard')) return NextResponse.redirect(dashboardURL);

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
