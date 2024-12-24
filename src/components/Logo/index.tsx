import LogoIcon from "@/assets/icons/logo-icon.svg";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Logo = () => {
  return (
    <Link href="/" aria-label="Home" className={styles.logo}>
      <LogoIcon />
    </Link>
  );
};
