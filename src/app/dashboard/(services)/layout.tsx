import { BalanceCard } from '@/components/BalanceCard';
import { ExtractSummary } from '@/components/ExtractSummary';
import { getUser } from '@/lib/auth/getUser';
import '@/theme/globals.scss';
import styles from './styles.module.scss';

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const user = await getUser();
  return (
    <>
      <div className={styles.pageContainer}>
        <BalanceCard user={user} />
        {children}
      </div>

      <ExtractSummary user={user} />
    </>
  );
}
