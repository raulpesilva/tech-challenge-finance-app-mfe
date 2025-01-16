import { PublicUser } from '@/@types/users';
import { getTransactionsByUser } from '@/services/transaction';
import Link from 'next/link';
import { NavLink } from '../shared/NavLink';
import { Typography } from '../shared/Typography';
import { TransactionCard } from '../TransactionCard';
import styles from './styles.module.scss';

interface ExtractSummaryProps {
  user: PublicUser | null;
}

export const ExtractSummary = async ({ user }: ExtractSummaryProps) => {
  // if (!user) return null;

  const transactions = user?.id ? await getTransactionsByUser(user.id, { _start: 0, _end: 4, _sort: '-dateIso' }) : [];

  return (
    <section className={styles.extractContainer}>
      <Link href='/dashboard/statement'>
        <Typography variant='heading2'>Extrato</Typography>
      </Link>
      {!transactions?.length && (
        <Typography variant='paragraph' className={styles.noTransactions}>
          Sem transações cadastradas
        </Typography>
      )}
      {transactions?.map?.((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)}
      {!!transactions?.length && (
        <NavLink href='/dashboard/statement' color='cta' colorActive='tertiary' replace className={styles.seeAll}>
          Ver todas as transações
        </NavLink>
      )}
    </section>
  );
};
