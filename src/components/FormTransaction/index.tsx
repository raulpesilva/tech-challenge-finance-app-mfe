'use client';

import { TransactionTypeDictionaryValue } from '@/@types/transaction';
import { CreateTransactionResponse } from '@/actions/transactions';
import { maskCurrency } from '@/utils/masks/maskCurrency';
import dayjs from 'dayjs';
import 'dayjs/locale/pt';
import { useActionState } from 'react';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Typography } from '../shared/Typography';
import { TransactionDate } from '../TransactionDate';
import { TransactionOptionsSelect } from '../TransactionOptionsSelect';
import styles from './styles.module.scss';

interface FormTransactionProps {
  type?: TransactionTypeDictionaryValue;
  createTransaction: (state: CreateTransactionResponse, payload: FormData) => Promise<CreateTransactionResponse>;
  initialTransaction: CreateTransactionResponse;
}

export const FormTransaction = ({ type, initialTransaction, createTransaction }: FormTransactionProps) => {
  const [state, action, isPending] = useActionState(createTransaction, initialTransaction);
  const transactionType = (state?.inputs?.type || type) as TransactionTypeDictionaryValue;
  const initialDate = state?.inputs?.date ? dayjs(state.inputs.date) : null;

  return (
    <form className={styles.formWrapper} action={action}>
      <TransactionOptionsSelect type={transactionType} />
      {state?.errors?.type?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      <Input
        id='value'
        name='value'
        label='Valor'
        placeholder='Digite o valor da transação'
        onInput={(e) => (e.currentTarget.value = maskCurrency(e.currentTarget.value))}
        className={styles.valueWrapper}
        defaultValue={maskCurrency(state?.inputs?.value)}
      />
      {state?.errors?.value?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      <TransactionDate initialDate={initialDate} />
      {state?.errors?.date?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      {state?.message && (
        <Typography variant='span' color='error' className={styles.errorMessage}>
          {state?.message}
        </Typography>
      )}
      <Button variant='contained' color='primary' className={styles.submitButton} loading={isPending}>
        Concluir transação
      </Button>

      {state.success && (
        <Typography variant='span' color='success' className={styles.successMessage}>
          Transação realizada com sucesso!
        </Typography>
      )}
    </form>
  );
};
