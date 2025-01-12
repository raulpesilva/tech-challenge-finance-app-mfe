'use client';

import { TransactionTypeDictionaryValue } from '@/@types/transaction';
import { maskCurrency } from '@/utils/masks/maskCurrency';
import 'dayjs/locale/pt';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { TransactionDate } from '../TransactionDate';
import { TransactionOptionsSelect } from '../TransactionOptionsSelect';
import styles from './styles.module.scss';

interface FormTransactionProps {
  type?: TransactionTypeDictionaryValue;
}

export const FormTransaction = ({ type }: FormTransactionProps) => {
  return (
    <form
      className={styles.formWrapper}
      action={(formdata) => {
        console.log('type', formdata.get('type'));
        console.log('value', formdata.get('value'));
        console.log('date', formdata.get('date'));
      }}
    >
      <TransactionOptionsSelect type={type} />
      <Input
        id='value'
        name='value'
        label='Valor'
        placeholder='Digite o valor da transação'
        onInput={(e) => (e.currentTarget.value = maskCurrency(e.currentTarget.value))}
        className={styles.valueWrapper}
      />
      <TransactionDate />
      <Button variant='contained' color='primary' className={styles.submitButton}>
        Concluir transação
      </Button>
    </form>
  );
};
