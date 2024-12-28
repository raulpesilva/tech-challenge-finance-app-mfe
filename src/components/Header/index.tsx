import Link from "next/link";
import styles from "./styles.module.scss";
import { LogoType } from "../LogoType";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoType />

        <div>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/dashboard">dashboard</Link>
          <Link href="/noexiste">noexiste</Link>
        </div>
      </div>
    </header>
  );
};
