'use client';

import CloseIcon from '@/assets/icons/close-icon.svg';
import { combaneStyles } from '@/utils/combaneStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import { ButtonIcon } from '../shared/ButtonIcon';
import styles from './styles.module.scss';

interface MenuDropdownProps {
  param: string;
  openIcon: React.ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const MenuDropdown = ({
  param,
  openIcon,
  variant,
  color,
  children,
  align = 'right',
  className,
}: MenuDropdownProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const menu = searchParams.get(param);
  const opened = menu === 'true';

  const open = () => router.push(`?${param}=true`);
  const close = () => router.replace('?');

  return (
    <div className={combaneStyles([styles.container, className && className])}>
      <ButtonIcon variant={variant} color={color} onClick={open} selected={opened} aria-label='Abrir menu'>
        {openIcon}
      </ButtonIcon>

      {!!opened && <div className={styles.overlay} onClick={close} />}

      {!!opened && (
        <div className={combaneStyles([styles.menuContainer, styles[align], styles[color]])}>
          <ButtonIcon
            variant='text'
            color={color}
            onClick={close}
            aria-label='Fechar menu'
            className={styles.closeButton}
          >
            <CloseIcon />
          </ButtonIcon>

          {children}
        </div>
      )}
    </div>
  );
};
