import { getSession } from '@/actions/auth/getSession';
import Link from 'next/link';

export const HeaderApp = async () => {
  const session = await getSession();

  return (
    <header style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
      <h1>App Header</h1>
      <div style={{ gap: 8, display: 'flex' }}>
        <Link href='/'>home</Link>
        <Link href='/dashboard'>dashboard</Link>
        <Link href='/dashboard/transactions'>Transferências</Link>
        <Link href='/dashboard/investments'>Investimentos</Link>
        <Link href='/dashboard/others'>Outros serviços</Link>
        <Link href='/dashboard/noexiste'>noexiste</Link>
      </div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </header>
  );
};
