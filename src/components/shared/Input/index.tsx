import { combineStyles } from '@/utils/combineStyles';
import styles from './styles.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
  textAlign?: 'left' | 'center' | 'right';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

export const Input = ({
  id,
  label,
  placeholder,
  textAlign = 'left',
  iconLeft,
  iconRight,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={combineStyles([styles.container, className && className])}>
      <label htmlFor={id}>{label}</label>

      <div className={combineStyles([styles.inputContainer, styles[textAlign]])}>
        {!!iconLeft && <label htmlFor={id}>{iconLeft}</label>}

        <input id={id} placeholder={placeholder} {...props} />

        {!!iconRight && <label htmlFor={id}>{iconRight}</label>}
      </div>
    </div>
  );
};
