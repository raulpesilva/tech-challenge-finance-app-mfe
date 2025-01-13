import CheckIcon from '@/assets/icons/check-icon.svg';
import { combineStyles } from '@/utils/combineStyles';
import styles from './styles.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  className?: string;
}

export const Checkbox = ({ id, label, color, className, ...props }: CheckboxProps) => {
  return (
    <div className={combineStyles([styles.container, className && className])}>
      <input id={id} type='checkbox' {...props} />

      <label htmlFor={id} className={combineStyles([styles.box, styles[color]])}>
        <CheckIcon />
      </label>

      <label htmlFor={id}>{label}</label>
    </div>
  );
};
