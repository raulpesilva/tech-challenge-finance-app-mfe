import MenuIcon from '@/assets/icons/menu-icon.svg';
import PersonIcon from '@/assets/icons/person-icon.svg';
import { getUser } from '@/lib/auth/getUser';
import { capitalize } from '@/utils/string';
import { MenuAccount } from '../MenuAccount';
import { MenuDropdown } from '../MenuDropdown';
import { MenuServicesApp } from '../MenuServicesApp';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const HeaderApp = async () => {
  const session = await getUser();
  const userName = session?.name || session?.email;

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
