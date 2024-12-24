import LogoIcon from "@/assets/icons/logotype-icon.svg";
import Link from "next/link";
import styles from "./styles.module.scss";

export const LogoType = () => {
  return (
    <Link href="/" aria-label="Home" className={styles.logotype}>
      <LogoIcon />
    </Link>
  );
};
