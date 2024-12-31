import { getUser } from '@/lib/auth/getUser';
import { capitalize } from '@/utils/string';
import PersonIcon from '../../assets/icons/person-icon.svg';
import { MenuAccount } from '../MenuAccount';
import { MenuDropdown } from '../MenuDropdown';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const HeaderApp = async () => {
  const session = await getUser();
  const userName = session?.name || session?.email;
  // return (
  //   <header >
  //     <h1>App Header</h1>
  //     <div style={{ gap: 8, display: 'flex' }}>
  //       <Link href='/'>home</Link>
  //       <Link href='/dashboard'>dashboard</Link>
  //       <Link href='/dashboard/transactions'>Transferências</Link>
  //       <Link href='/dashboard/investments'>Investimentos</Link>
  //       <Link href='/dashboard/others'>Outros serviços</Link>
  //       <Link href='/dashboard/noexiste'>noexiste</Link>
  //     </div>
  //     {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
  //   </header>
  // );ˆ

  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
