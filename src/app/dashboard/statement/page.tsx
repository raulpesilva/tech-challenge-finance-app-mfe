import { Pagination } from '@/components/Pagination';
import { Typography } from '@/components/shared/Typography';
import { TransactionCard } from '@/components/TransactionCard';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import { redirect } from 'next/navigation';
import styles from './styles.module.scss';

interface PageProps {
  searchParams: { page?: string };
}

const itemsPerPage = 2;
const requestLimit = itemsPerPage + 1;

export default async function Page({ searchParams }: PageProps) {
  const user = await getUser();
  if (!user) return null;

  const page = searchParams.page ? Number(searchParams.page) : 1;
  const startRequest = (page - 1) * itemsPerPage;
  const endRequest = startRequest + requestLimit;

  const transactions = await getTransactionsByUser(user.id, {
    _sort: '-dateIso',
    _start: startRequest,
    _end: endRequest,
  });

  if (!transactions) return null;
  if (!transactions.length && page !== 1) redirect('/dashboard/statement');

  const transactionsSlice = transactions.slice(0, itemsPerPage);

  return (
    <div className={styles.container}>
      <Typography variant='heading2'>Extrato completo</Typography>

      {!transactionsSlice.length && (
        <Typography variant='paragraph' className={styles.noTransactions}>
          Sem transações cadastradas
        </Typography>
      )}

      {!!transactionsSlice.length &&
        transactionsSlice.map((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)}

      {!!transactionsSlice.length && (
        <Pagination page={page} itemsPerPage={itemsPerPage} totalItems={transactions.length} />
      )}
    </div>
  );
}
