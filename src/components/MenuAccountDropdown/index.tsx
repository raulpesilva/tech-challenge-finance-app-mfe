'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import CloseIcon from '../../assets/icons/close-icon.svg';
import PersonIcon from '../../assets/icons/person-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import styles from './styles.module.scss';

interface MenuAccountDropdownProps {
  children: React.ReactNode;
}

export const MenuAccountDropdown = ({ children }: MenuAccountDropdownProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const menuAccount = searchParams.get('menu-account');
  const opened = menuAccount === 'true';

  const open = () => router.push('?menu-account=true');
  const close = () => router.replace('?');

  return (
    <div className={styles.container}>
      <ButtonIcon
        variant='outlined'
        color='secondary'
        onClick={open}
        className={styles.menuButton}
        selected={opened}
        aria-label='Abrir menu de conta'
      >
        <PersonIcon />
      </ButtonIcon>

      {!!opened && <div className={styles.overlay} onClick={close} />}

      {!!opened && (
        <div className={styles.menuContainer}>
          <ButtonIcon
            variant='text'
            color='secondary'
            onClick={close}
            className={styles.closeButton}
            aria-label='Fechar menu de conta'
          >
            <CloseIcon />
          </ButtonIcon>

          {children}
        </div>
      )}
    </div>
  );
};
