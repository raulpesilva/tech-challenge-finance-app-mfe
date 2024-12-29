import LogoIcon from "@/assets/icons/logotype-icon.svg";
import { combaneStyles } from "@/utils/combaneStyles";
import Link from "next/link";
import styles from "./styles.module.scss";

interface LogoTypeProps {
  className?: string;
}

export const LogoType = ({ className }: LogoTypeProps) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={combaneStyles([styles.logotype, className && className])}
    >
      <LogoIcon />
    </Link>
  );
};
