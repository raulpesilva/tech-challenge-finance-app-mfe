import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/theme/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FIAP Tech challenge',
  description: 'Projeto criado para Tech challenge FIAP',
};

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: Readonly<LayoutProps>) {
  return (
    <div id='test'>
      <Header />
      {children}
      <Footer />
      {modal}
    </div>
  );
}
