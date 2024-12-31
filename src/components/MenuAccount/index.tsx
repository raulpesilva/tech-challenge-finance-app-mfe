import { logout } from '@/lib/auth/logout';
import { redirect } from 'next/navigation';
import { Button } from '../shared/Button';
import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const MenuAccount = () => {
  const handleLogout = async () => {
    'use server';
    logout();
    redirect('/');
  };

  return (
    <div className={styles.container}>
      {/* TODO: Add account link */}
      <ButtonLink href='/dashboard/account' variant='text' color='cta' className={styles.link} replace>
        Minha conta
      </ButtonLink>

      {/* TODO: Add settings link */}
      <ButtonLink href='/dashboard/settings' variant='text' color='cta' className={styles.link} replace>
        Configurações
      </ButtonLink>

      <Button variant='text' color='cta' onClick={handleLogout} className={styles.logoutButton}>
        Sair
      </Button>
    </div>
  );
};
