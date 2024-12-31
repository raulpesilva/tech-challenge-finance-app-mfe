'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '../../assets/icons/close-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import styles from './styles.module.scss';

interface MenuDropdownProps {
  param: string;
  openIcon: React.ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export const MenuDropdown = ({ param, openIcon, variant, color, children, align = 'right' }: MenuDropdownProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const menu = searchParams.get(param);
  const opened = menu === 'true';

  const open = () => router.push(`?${param}=true`);
  const close = () => router.replace('?');

  return (
    <div className={styles.container}>
      <ButtonIcon variant={variant} color={color} onClick={open} selected={opened} aria-label='Abrir menu'>
        {openIcon}
      </ButtonIcon>

      {!!opened && <div className={styles.overlay} onClick={close} />}

      {!!opened && (
        <div className={combaneStyles([styles.menuContainer, styles[align]])}>
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
