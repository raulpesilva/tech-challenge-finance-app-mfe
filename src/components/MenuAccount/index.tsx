import { Button } from '@/components/shared/Button';
import { NavLink } from '@/components/shared/NavLink';
import { logout } from '@/lib/auth/logout';
import { redirect } from 'next/navigation';
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
      <NavLink href='/dashboard/account' color='cta' colorActive='secondary' replace>
        Minha conta
      </NavLink>

      {/* TODO: Add settings link */}
      <NavLink href='/dashboard/settings' color='cta' colorActive='secondary' replace>
        Configurações
      </NavLink>

      <Button variant='text' color='cta' onClick={handleLogout} className={styles.logoutButton}>
        Sair
      </Button>
    </div>
  );
};
