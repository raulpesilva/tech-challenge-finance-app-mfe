import { combaneStyles } from '@/utils/combaneStyles';
import CheckIcon from '../../../assets/icons/check-icon.svg';
import styles from './styles.module.scss';

interface CheckboxProps {
  id: string;
  label: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  className?: string;
}

export const Checkbox = ({ id, label, color, className, ...props }: CheckboxProps) => {
  return (
    <div className={combaneStyles([styles.container, className && className])}>
      <input id={id} type='checkbox' {...props} />

      <label htmlFor={id} className={combaneStyles([styles.box, styles[color]])}>
        <CheckIcon />
      </label>

      <label htmlFor={id}>{label}</label>
    </div>
  );
};
