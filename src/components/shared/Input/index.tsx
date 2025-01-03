import { combaneStyles } from '@/utils/combaneStyles';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
  textAlign?: 'left' | 'center' | 'right';
  success?: boolean;
  successMessage?: string;
  error?: boolean;
  errorMessage?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Input = ({
  id,
  label,
  placeholder,
  textAlign = 'left',
  success,
  successMessage,
  error,
  errorMessage,
  iconLeft,
  iconRight,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={combaneStyles([styles.container, className && className])}>
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

        <input id={id} placeholder={placeholder} {...props} />

        {!!iconRight && <label htmlFor={id}>{iconRight}</label>}
      </div>

      {error && !!errorMessage && (
        <Typography variant='paragraph' size='sm' color='error'>
          {errorMessage}
        </Typography>
      )}

      {!error && success && !!successMessage && (
        <Typography variant='paragraph' size='sm' color='success'>
          {successMessage}
        </Typography>
      )}
    </div>
  );
};
