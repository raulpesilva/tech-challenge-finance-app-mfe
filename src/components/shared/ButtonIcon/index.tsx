import LoadingIcon from '@/assets/icons/loading-icon.svg';
import { combineStyles } from '@/utils/combineStyles';
import styles from './styles.module.scss';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  selected?: boolean;
}

export const ButtonIcon = ({ variant, color, children, loading, className, selected, ...props }: ButtonIconProps) => {
  return (
    <button
      className={combineStyles([
        styles.button,
        styles[variant],
        styles[color],
        loading && styles.loading,
        className && className,
        selected && styles.selected,
      ])}
      {...props}
    >
      {children}
      {!!loading && <LoadingIcon className={styles.loadingIcon} />}
    </button>
  );
};
