import { combaneStyles } from "@/utils/combaneStyles";
import Loading from "../../../assets/icons/loading-icon.svg";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outlined" | "contained";
  color: "primary" | "secondary" | "tertiary" | "error" | "cta";
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  variant,
  color,
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={combaneStyles([
        styles.button,
        styles[variant],
        styles[color],
        loading && styles.loading,
      ])}
      {...props}
    >
      {!loading && children}
      {!!loading && <Loading />}
    </button>
  );
};
