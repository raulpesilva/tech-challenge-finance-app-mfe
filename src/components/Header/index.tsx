import Link from "next/link";

export const Header = () => {
  return (
    <header style={{ gap: 8, display: 'flex' }}>
      <h1>Home header</h1>
      <Link href='/'>Home</Link>
      <Link href='/login'>Login</Link>
      <Link href='/register'>Register</Link>
      <Link href='/dashboard'>dashboard</Link>
    </header>
  );
}