import { HeaderApp } from "@/components/HeaderApp";
import "@/theme/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bytebank | Dashboard | FIAP Tech Challenge",
  description:
    "Bytebank é o seu sistema bancário digital, permitindo gerenciar contas, realizar transações e acompanhar saldos de forma simples e eficiente!",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderApp />
      {children}
    </>
  );
}
