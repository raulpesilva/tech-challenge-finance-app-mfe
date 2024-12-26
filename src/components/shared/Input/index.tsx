import { combaneStyles } from "@/utils/combaneStyles";
import {
  FormEvent,
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from "react";
import { Typography } from "../Typography";
import styles from "./styles.module.scss";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  textAlign?: "left" | "center" | "right";
  autoComplete?: HTMLInputAutoCompleteAttribute;
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
  type = "text",
  maxLength,
  textAlign = "left",
  autoComplete = "off",
  success,
  successMessage,
  error,
  errorMessage,
  iconLeft,
  iconRight,
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
          type={type}
          maxLength={maxLength}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
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
