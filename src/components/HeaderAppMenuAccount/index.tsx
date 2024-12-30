'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Close from '../../assets/icons/close-icon.svg';
import PersonIcon from '../../assets/icons/person-icon.svg';
import { ButtonIcon } from '../shared/ButtonIcon';
import styles from './styles.module.scss';

export const HeaderAppMenuAccount = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const openMenu = searchParams.get('menu');

  const setOpened = (value: boolean) => {
    router.push(`?menu=` + value);
  };

  const open = () => setOpened(true);
  const close = () => router.replace('?');

  const opened = openMenu === 'true';

  return (
    <div className={styles.container}>
      <ButtonIcon variant='outlined' color='secondary' onClick={open} className={styles.menuButton}>
        <PersonIcon />
      </ButtonIcon>

      {/* {!!opened && <div className={styles.overlay} onClick={handleToggleMenu} />} */}

      {!!opened && (
        <div className={styles.menuContent}>
          <ButtonIcon variant='text' color='tertiary' onClick={close} className={styles.closeButton}>
            <Close />
          </ButtonIcon>

          {children}
        </div>
      )}
    </div>
  );
};
