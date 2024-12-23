import Link from 'next/link';

export const HeaderApp = () => {
  return (
    <header style={{ gap: 8, display: 'flex' }}>
      <h1>App Header</h1>
      <Link href="/">Início</Link>
      <Link href="/transactions">Transferências</Link>
      <Link href="/investments">Investimentos</Link>
      <Link href="/others">Outros serviços</Link>
      <Link href="/noexiste">noexiste</Link>
    </header>
  );
};
