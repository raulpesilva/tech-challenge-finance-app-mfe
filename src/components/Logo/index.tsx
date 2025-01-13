import LogoIcon from '@/assets/icons/logo-icon.svg';
import { combineStyles } from '@/utils/combineStyles';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href='/' aria-label='Home' className={combineStyles([styles.logo, className && className])}>
      <LogoIcon />
    </Link>
  );
};
