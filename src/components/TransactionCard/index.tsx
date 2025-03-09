import { CATEGORIES_TYPES_DICTIONARY } from '@/@types/category';
import { MONTHS_DICTIONARY, Transaction, TRANSACTIONS_TYPES_DICTIONARY } from '@/@types/transaction';
import { deleteTransactionAction } from '@/actions/transactions';
import AttachmentIcon from '@/assets/icons/attach-icon.svg';
import DeleteIcon from '@/assets/icons/delete-icon.svg';
import EditIcon from '@/assets/icons/edit-icon.svg';
import { formatCurrency } from '@/utils/formatCurrency';
import dayjs from 'dayjs';
import { ButtonIcon } from '../shared/ButtonIcon';
import { ButtonLink } from '../shared/ButtonLink';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const id = transaction.id;
  const type = transaction.type;
  const title = transaction.title;
  const value = transaction.value;
  const date = transaction.date;
  const [day, month, year] = date?.split('/');
  const dateFormatted = dayjs(`${year}-${month}-${day}`).format('MMMM');
  const category = CATEGORIES_TYPES_DICTIONARY[transaction.category];
  const attachment = transaction.attachment;

  const deleteAction = deleteTransactionAction.bind(null, id);

  const negative = type === 'withdraw' || type === 'transfer';
  let amount = value / 100;
  if (negative) amount *= -1;

  return (
    <div className={styles.transaction}>
      <div className={styles.date}>
        <Typography variant='span' weight='semiBold' color='tertiary'>
          {MONTHS_DICTIONARY[dateFormatted as keyof typeof MONTHS_DICTIONARY] ?? ''}
        </Typography>
        <Typography variant='span' color='gray400'>
          {date}
        </Typography>
      </div>

      <div className={styles.titleWrapper}>
        <Typography variant='paragraph' weight='semiBold'>
          {title}
        </Typography>

        {attachment && <AttachmentIcon />}
      </div>

      <Typography variant='paragraph'>{TRANSACTIONS_TYPES_DICTIONARY[type] ?? ''}</Typography>

      {category && category !== 'Sem Categoria' && <Typography variant='paragraph'>{category}</Typography>}

      <Typography variant='paragraph' weight='semiBold'>
        {formatCurrency(amount)}
      </Typography>

      <div className={styles.actions}>
        <ButtonLink
          href={`/dashboard/statement/${id}`}
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
