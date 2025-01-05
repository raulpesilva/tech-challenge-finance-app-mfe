import { BalanceCard } from '@/components/BalanceCard';
import { ExtractSummary } from '@/components/ExtractSummary';
import '@/theme/globals.scss';
import styles from './styles.module.scss';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className={styles.pageContainer}>
        <BalanceCard />
        {children}
      </div>

      <ExtractSummary />
    </>
  );
}
