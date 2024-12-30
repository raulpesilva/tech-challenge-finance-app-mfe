import { combaneStyles } from '@/utils/combaneStyles';
import Link, { LinkProps } from 'next/link';
import styles from './styles.module.scss';

interface ButtonLinkProps extends LinkProps {
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({ variant, color, href, children, className, ...props }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={combaneStyles([styles.buttonLink, styles[variant], styles[color], className && className])}
      {...props}
    >
      {children}
    </Link>
  );
};
