import "@/theme/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Bytebank | FIAP Tech Challenge",
  description:
    "Bytebank é o seu sistema bancário digital, permitindo gerenciar contas, realizar transações e acompanhar saldos de forma simples e eficiente!",
};

interface LayoutProps {
  authenticated: React.ReactNode;
  unauthenticated: React.ReactNode;
}

const isAuthenticated = false;

export default function RootLayout({
  authenticated,
  unauthenticated,
}: Readonly<LayoutProps>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {isAuthenticated ? authenticated : unauthenticated}
      </body>
    </html>
  );
}
