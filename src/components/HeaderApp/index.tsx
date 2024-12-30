import { getSession } from '@/actions/auth/getSession';
import { HeaderAppMenuAccount } from '../HeaderAppMenuAccount';
import { MenuAccount } from '../MenuAccount';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const HeaderApp = async () => {
  const session = await getSession();

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
  // );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Typography variant='paragraph' size='sm'>
          Fulano de Tal
        </Typography>

        <HeaderAppMenuAccount>
          <MenuAccount />
        </HeaderAppMenuAccount>
      </div>
    </header>
  );
};
