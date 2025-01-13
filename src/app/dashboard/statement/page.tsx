import { Typography } from '@/components/shared/Typography';
import { TransactionCard } from '@/components/TransactionCard';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';

export default async function Page() {
  const user = await getUser();
  if (!user) return null;
  const transactions = await getTransactionsByUser(user.id, {_sort: '-dateIso'});
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
      <Typography variant='heading2'>Extract</Typography>
      {transactions?.map?.((transaction) => <TransactionCard key={transaction.id} transaction={transaction} />)}
    </div>
  );
}
