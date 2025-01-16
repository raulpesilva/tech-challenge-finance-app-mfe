import { Typography } from '@/components/shared/Typography';
import { TransactionCard } from '@/components/TransactionCard';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import styles from './styles.module.scss';

export default async function Page() {
  const user = await getUser();
  if (!user) return null;
  const transactions = await getTransactionsByUser(user.id, { _sort: '-dateIso' });

  return (
    <div className={styles.container}>
      <Typography variant='heading2'>Extrato completo</Typography>
      {!transactions?.length && (
        <Typography variant='paragraph' className={styles.noTransactions}>
          Sem transações cadastradas
        </Typography>
      )}
      {transactions?.map?.((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)}
    </div>
  );
}
