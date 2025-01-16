import { PublicUser } from '@/@types/users';
import MenuIcon from '@/assets/icons/menu-icon.svg';
import PersonIcon from '@/assets/icons/person-icon.svg';
import { Typography } from '@/components/shared/Typography';
import { capitalize } from '@/utils/string';
import { MenuAccount } from '../MenuAccount';
import { MenuDropdown } from '../MenuDropdown';
import { MenuServicesApp } from '../MenuServicesApp';
import styles from './styles.module.scss';

interface HeaderAppProps {
  user: PublicUser | null;
}

export const HeaderApp = ({ user }: HeaderAppProps) => {
  const userName = user?.name || user?.email;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <MenuDropdown
          param='menu-services-app'
          openIcon={<MenuIcon />}
          variant='text'
          color='secondary'
          align='left'
          className={styles.menuServicesApp}
        >
          <MenuServicesApp />
        </MenuDropdown>

        <Typography variant='paragraph' size='sm' weight='semiBold' color='secondary' className={styles.user}>
          {capitalize(userName ?? 'Usuário')}
        </Typography>

        <MenuDropdown param='menu-account' openIcon={<PersonIcon />} variant='outlined' color='secondary'>
          <MenuAccount />
        </MenuDropdown>
      </div>
    </header>
  );
};
