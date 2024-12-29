import LogoIcon from '@/assets/icons/logo-icon.svg';
import { combaneStyles } from '@/utils/combaneStyles';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' aria-label='Home' className={combaneStyles([styles.logo, className && className])}>
      <LogoIcon />
    </Link>
  );
};
