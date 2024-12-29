'use client';

import { combaneStyles } from '@/utils/combaneStyles';
import { useState } from 'react';
import Close from '../../assets/icons/close-icon.svg';
import Menu from '../../assets/icons/menu-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const HeaderMenu = () => {
  const [opened, setOpened] = useState(false);

  const handleToggleMenu = () => setOpened(!opened);

  return (
    <div>
      <ButtonIcon variant='text' color='tertiary' onClick={handleToggleMenu} className={styles.menuButton}>
        <Menu />
      </ButtonIcon>

      <div className={combaneStyles([styles.overlay, opened && styles.opened])} onClick={handleToggleMenu} />

      <div className={combaneStyles([styles.menuContent, opened && styles.opened])}>
        <ButtonIcon variant='text' color='tertiary' onClick={handleToggleMenu} className={styles.closeButton}>
          <Close />
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
