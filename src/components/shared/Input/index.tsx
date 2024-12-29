import { combaneStyles } from "@/utils/combaneStyles";
import { FormEvent } from "react";
import { Typography } from "../Typography";
import styles from "./styles.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  textAlign?: "left" | "center" | "right";
  success?: boolean;
  successMessage?: string;
  error?: boolean;
  errorMessage?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  textAlign = "left",
  success,
  successMessage,
  error,
  errorMessage,
  iconLeft,
  iconRight,
  ...props
}: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>

      <div
        className={combaneStyles([
          styles.inputContainer,
          error && styles.error,
          !error && success && styles.success,
          styles[textAlign],
        ])}
      >
        {!!iconLeft && <label htmlFor={id}>{iconLeft}</label>}

        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />

        {!!iconRight && <label htmlFor={id}>{iconRight}</label>}
      </div>

      {error && !!errorMessage && (
        <Typography variant="paragraph" size="sm" color="error">
          {errorMessage}
        </Typography>
      )}

      {!error && success && !!successMessage && (
        <Typography variant="paragraph" size="sm" color="success">
          {successMessage}
        </Typography>
      )}
    </div>
  );
};
