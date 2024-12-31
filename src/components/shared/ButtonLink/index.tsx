import { combaneStyles } from '@/utils/combaneStyles';
import Link, { LinkProps } from 'next/link';
import styles from './styles.module.scss';

interface ButtonLinkProps extends LinkProps {
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  href: string;
  children: React.ReactNode;
  className?: string;
  selected?: boolean;
}

export const ButtonLink = ({ variant, color, href, children, className, selected, ...props }: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={combaneStyles([
        styles.buttonLink,
        styles[variant],
        styles[color],
        className && className,
        selected && styles.selected,
      ])}
      {...props}
    >
      {children}
    </Link>
  );
};
