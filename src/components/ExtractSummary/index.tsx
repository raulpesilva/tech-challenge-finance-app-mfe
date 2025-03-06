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

const renderedItems = 4;

export const ExtractSummary = async ({ user }: ExtractSummaryProps) => {
  const transactions = user?.id
    ? await getTransactionsByUser(user.id, { _start: 0, _end: renderedItems + 1, _sort: '-dateIso' })
    : [];
  if (!transactions) return null;

  const transactionsSlice = transactions.slice(0, renderedItems);

  return (
    <section className={styles.extractContainer}>
      <Link href='/dashboard/statement'>
        <Typography variant='heading2'>Extrato</Typography>
      </Link>

      {!transactionsSlice.length && (
        <Typography variant='paragraph' className={styles.noTransactions}>
          Sem transações
        </Typography>
      )}

      {!!transactionsSlice.length && (
        <div className={styles.transactions}>
          {transactionsSlice.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}

      {transactions.length > renderedItems && (
        <NavLink href='/dashboard/statement' color='cta' colorActive='tertiary' replace className={styles.seeAll}>
          Ver todas as transações
        </NavLink>
      )}
    </section>
  );
};
