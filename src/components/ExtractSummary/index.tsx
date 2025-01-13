import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import { Typography } from '../shared/Typography';
import { TransactionCard } from '../TransactionCard';
import styles from './styles.module.scss';

export const ExtractSummary = async () => {
  const user = await getUser();
  if (!user) return null;
  const transactions = await getTransactionsByUser(user.id, { _start: 0, _end: 4, _sort: '-dateIso' });
  return (
    <section className={styles.extractContainer}>
      <Typography variant='heading2'>Extract</Typography>
      {transactions?.map?.((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)}
    </section>
  );
};
