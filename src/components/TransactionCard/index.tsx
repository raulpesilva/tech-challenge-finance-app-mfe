import { Transaction, TRANSACTIONS_TYPES_DICTIONARY } from '@/@types/transaction';
import { deleteTransactionAction } from '@/actions/transactions';
import { maskCurrency } from '@/utils/masks/maskCurrency';
import dayjs from 'dayjs';
import { Button } from '../shared/Button';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const [day, month, year] = transaction.date.split('/');
  const date = dayjs(`${year}-${month}-${day}`).format('MMMM');
  const deleteAction = deleteTransactionAction.bind(null, transaction.id);
  return (
    <div className={styles.transaction}>
      <div className={styles.date}>
        <Typography variant='paragraph' color='success'>
          {date}
        </Typography>
        <Typography variant='paragraph'>{transaction.date}</Typography>
      </div>
      <Typography variant='paragraph'>{TRANSACTIONS_TYPES_DICTIONARY[transaction.type] ?? ''}</Typography>
      <Typography variant='paragraph' weight='bold'>
        R$ {maskCurrency(transaction.value)}
      </Typography>
      <form action={deleteAction}>
        <Button variant='contained' color='error' type='submit'>
          Excluir
        </Button>
      </form>
    </div>
  );
};
