import { combaneStyles } from "@/utils/combaneStyles";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonLinkProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  variant: "text" | "outlined" | "contained";
  color: "primary" | "secondary" | "tertiary" | "error" | "cta";
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({
  variant,
  color,
  href,
  children,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={combaneStyles([
        styles.buttonLink,
        styles[variant],
        styles[color],
      ])}
      {...props}
    >
      {children}
    </Link>
  );
};
