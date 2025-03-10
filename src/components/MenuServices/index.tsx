'use client';

import CloseIcon from '@/assets/icons/close-icon.svg';
import MenuIcon from '@/assets/icons/menu-icon.svg';
import { ButtonIcon } from '@/components/shared/ButtonIcon';
import { NavLink } from '@/components/shared/NavLink';
import { combineStyles } from '@/utils/combineStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './styles.module.scss';

export const MenuServices = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const menu = searchParams.get('services');
  const opened = menu === 'true';

  const open = () => router.push(`?services=true`);
  const close = () => router.replace('?');

  return (
    <div>
      <ButtonIcon variant='text' color='tertiary' onClick={open} className={styles.openButton} aria-label='Abrir menu'>
        <MenuIcon />
      </ButtonIcon>

      {!!opened && <div className={styles.overlay} onClick={close} />}

      <div className={combineStyles([styles.menuContent, opened && styles.opened])}>
        <ButtonIcon
          variant='text'
          color='tertiary'
          onClick={close}
          className={styles.closeButton}
          aria-label='Fechar menu'
        >
          <CloseIcon />
        </ButtonIcon>

        <NavLink href='/about' color='ctaForeground' colorActive='tertiary' className={styles.link} replace>
          Sobre
        </NavLink>

        <NavLink href='/services' color='ctaForeground' colorActive='tertiary' className={styles.link} replace>
          Serviços
        </NavLink>
      </div>
    </div>
  );
};
