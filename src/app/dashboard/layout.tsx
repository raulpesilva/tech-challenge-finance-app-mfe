import { HeaderApp } from '@/components/HeaderApp';
import { MenuServicesApp } from '@/components/MenuServicesApp';
import '@/theme/globals.scss';
import type { Metadata } from 'next';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'Bytebank | Dashboard | FIAP Tech Challenge',
  description:
    'Bytebank é o seu sistema bancário digital, permitindo gerenciar contas, realizar transações e acompanhar saldos de forma simples e eficiente!',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.app}>
      <HeaderApp />

      <main className={styles.main}>
        <div className={styles.container}>
          <MenuServicesApp colorActive='tertiary' className={styles.menuContainer} />
          {children}
        </div>
      </main>
    </div>
  );
}
