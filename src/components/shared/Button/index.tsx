import Loading from "../../../assets/icons/loading-icon.svg";
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "outlined" | "contained";
  color: "primary" | "secondary" | "tertiary" | "error" | "cta";
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
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
      className={[
        styles.button,
        styles[variant],
        styles[color],
        loading && styles.loading,
      ].join(" ")}
      {...props}
    >
      {!loading && children}
      {!!loading && <Loading />}
    </button>
  );
};
