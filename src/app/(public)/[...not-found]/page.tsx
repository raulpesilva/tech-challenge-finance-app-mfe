import { headers } from 'next/headers';
import Link from 'next/link';
import Page from '../page';

const publicRoutes = ['/login', '/register'];

export default async function NotFound() {
  const header = await headers();
  const pathname = header.get('x-current-path');

  if (publicRoutes.some((route) => pathname?.includes(route))) return <Page />;

  return (
    <div>
      <h2>Not Found public catch all</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
