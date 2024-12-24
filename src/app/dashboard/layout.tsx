import { HeaderApp } from '@/components/HeaderApp';
import '@/theme/globals.scss';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'FIAP Tech challenge',
  description: 'Projeto criado para Tech challenge FIAP',
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderApp />
      {children}
    </>
  );
}
