import { combaneStyles } from '@/utils/combaneStyles';
import CheckIcon from '../../../assets/icons/check-icon.svg';
import styles from './styles.module.scss';

interface CheckboxProps {
  id: string;
  label: string;
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
}

export const Checkbox = ({ id, label, color, ...props }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <input id={id} type='checkbox' {...props} />

      <label htmlFor={id} className={combaneStyles([styles.box, styles[color]])}>
        <CheckIcon />
      </label>

      <label htmlFor={id}>{label}</label>
    </div>
  );
};
