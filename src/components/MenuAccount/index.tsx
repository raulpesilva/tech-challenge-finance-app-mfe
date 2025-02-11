import { NavLink } from '@/components/shared/NavLink';
import { logout } from '@/lib/auth/logout';
import { redirect } from 'next/navigation';
import { LogoutButton } from '../LogoutButton';
import styles from './styles.module.scss';

export const MenuAccount = () => {
  const handleLogout = async () => {
    'use server';
    await logout();
    redirect('/');
  };

  return (
    <div className={styles.container}>
      <NavLink href='/dashboard/account' color='cta' colorActive='secondary' replace>
        Minha conta
      </NavLink>

      <NavLink href='/dashboard/settings' color='cta' colorActive='secondary' replace>
        Configurações
      </NavLink>

      <form action={handleLogout}>
        <LogoutButton />
      </form>
    </div>
  );
};
