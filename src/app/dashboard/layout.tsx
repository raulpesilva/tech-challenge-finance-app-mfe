import { HeaderApp } from '@/components/HeaderApp';
import { MenuServicesApp } from '@/components/MenuServicesApp';
import { getUser } from '@/lib/auth/getUser';
import '@/theme/globals.scss';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Bytebank | Dashboard | FIAP Tech Challenge',
  description:
    'Bytebank é o seu sistema bancário digital, permitindo gerenciar contas, realizar transações e acompanhar saldos de forma simples e eficiente!',
};

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getUser();
  return (
    <div className={styles.app}>
      <HeaderApp user={user} />

      <main className={styles.main}>
        <div className={styles.container}>
          <Suspense>
            <MenuServicesApp colorActive='tertiary' className={styles.menuContainer} />
          </Suspense>
          {children}
        </div>
      </main>
    </div>
  );
}
