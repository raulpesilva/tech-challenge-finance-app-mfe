import '@/theme/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'FIAP Tech challenge',
  description: 'Projeto criado para Tech challenge FIAP',
};

interface LayoutProps {
  authenticated: React.ReactNode;
  unauthenticated: React.ReactNode;
}

const isAuthenticated = false;

export default function RootLayout({  authenticated, unauthenticated }: Readonly<LayoutProps>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {isAuthenticated ? authenticated : unauthenticated}
        </body>
    </html>
  );
}
