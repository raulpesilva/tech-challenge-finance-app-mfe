import { CATEGORIES_TYPES_DICTIONARY } from '@/@types/category';
import { MONTHS_DICTIONARY, Transaction, TRANSACTIONS_TYPES_DICTIONARY } from '@/@types/transaction';
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
  const category = CATEGORIES_TYPES_DICTIONARY[transaction.category];

  const deleteAction = deleteTransactionAction.bind(null, transaction.id);

  const negative = transaction.type === 'withdraw' || transaction.type === 'transfer';
  let value = transaction.value / 100;
  if (negative) value *= -1;

  return (
    <div className={styles.transaction}>
      <div className={styles.date}>
        <Typography variant='span' weight='semiBold' color='tertiary'>
          {MONTHS_DICTIONARY[date as keyof typeof MONTHS_DICTIONARY] ?? ''}
        </Typography>
        <Typography variant='span' color='gray400'>
          {transaction.date}
        </Typography>
      </div>

      {transaction.title && (
        <Typography variant='paragraph' weight='semiBold'>
          {transaction.title}
        </Typography>
      )}

      <Typography variant='paragraph'>{TRANSACTIONS_TYPES_DICTIONARY[transaction.type] ?? ''}</Typography>

      {category && category !== 'Sem Categoria' && <Typography variant='paragraph'>{category}</Typography>}

      <Typography variant='paragraph' weight='semiBold'>
        {formatCurrency(value)}
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
