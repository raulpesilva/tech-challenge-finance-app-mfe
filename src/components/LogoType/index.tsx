import LogoIcon from '@/assets/icons/logotype-icon.svg';
import { combineStyles } from '@/utils/combineStyles';
import Link from 'next/link';
import styles from './styles.module.scss';

interface LogoTypeProps {
  className?: string;
}

export const LogoType = ({ className }: LogoTypeProps) => {
  return (
    <Link href='/' aria-label='Home' className={combineStyles([styles.logotype, className && className])}>
      <LogoIcon />
    </Link>
  );
};
