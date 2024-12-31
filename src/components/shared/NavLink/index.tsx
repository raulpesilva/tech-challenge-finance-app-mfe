'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

interface NavLinkProps extends LinkProps {
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  colorActive: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ color, colorActive, href, children, className, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={combaneStyles([
        styles.navLink,
        styles[color],
        styles[`${colorActive}Active`],
        isActive && styles.isActive,
        className && className,
      ])}
      {...props}
    >
      {children}
    </Link>
  );
};
