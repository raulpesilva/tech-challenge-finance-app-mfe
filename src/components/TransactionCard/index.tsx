import { Transaction, TRANSACTIONS_TYPES_DICTIONARY } from '@/@types/transaction';
import { deleteTransactionAction } from '@/actions/transactions';
import DeleteIcon from '@/assets/icons/delete-icon.svg';
import EditIcon from '@/assets/icons/edit-icon.svg';
import { formatCurrency } from '@/utils/formatCurrency';
import dayjs from 'dayjs';
import { ButtonIcon } from '../shared/ButtonIcon';
import { ButtonLink } from '../shared/ButtonLink';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const [day, month, year] = transaction.date.split('/');
  const date = dayjs(`${year}-${month}-${day}`).format('MMMM');
  const deleteAction = deleteTransactionAction.bind(null, transaction.id);

  const negative = transaction.type === 'withdraw' || transaction.type === 'transfer';
  if (negative) transaction.value *= -1;

  return (
    <div className={styles.transaction}>
      <div className={styles.date}>
        <Typography variant='span' weight='semiBold' color='tertiary'>
          {date}
        </Typography>
        <Typography variant='span' color='gray400'>
          {transaction.date}
        </Typography>
      </div>

      <Typography variant='paragraph'>{TRANSACTIONS_TYPES_DICTIONARY[transaction.type] ?? ''}</Typography>

      <Typography variant='paragraph' weight='semiBold'>
        {formatCurrency(transaction.value / 100)}
      </Typography>

      <div className={styles.actions}>
        <ButtonLink
          href={`/dashboard/statement/${transaction.id}`}
          variant='contained'
          color='tertiary'
          className={styles.editButton}
        >
          <EditIcon />
        </ButtonLink>

        <form action={deleteAction}>
          <ButtonIcon variant='contained' color='error' type='submit'>
            <DeleteIcon />
          </ButtonIcon>
        </form>
      </div>
    </div>
  );
};
