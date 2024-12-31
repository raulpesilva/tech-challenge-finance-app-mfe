'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '../../assets/icons/close-icon.svg';
import MenuIcon from '../../assets/icons/menu-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const MenuServices = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const menu = searchParams.get('menu-account');
  const opened = menu === 'true';

  const open = () => router.push(`?menu-account=true`);
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

        <ButtonLink href='/' variant='text' color='tertiary' className={styles.link}>
          Sobre
        </ButtonLink>

        <ButtonLink href='/' variant='text' color='tertiary' className={styles.link}>
          Serviços
        </ButtonLink>
      </div>
    </div>
  );
};
