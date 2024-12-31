'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '../../assets/icons/close-icon.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import { NavLink } from '../shared/NavLink';
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
      <ButtonIcon variant='text' color='tertiary' onClick={open} className={styles.openButton}>
        <MenuIcon />
      </ButtonIcon>

      {!!opened && <div className={styles.overlay} onClick={close} />}

      <div className={combaneStyles([styles.menuContent, opened && styles.opened])}>
        <ButtonIcon variant='text' color='tertiary' onClick={close} className={styles.closeButton}>
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
