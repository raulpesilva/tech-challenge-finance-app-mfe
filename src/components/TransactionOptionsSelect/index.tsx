import { TRANSACTIONS_TYPES_DICTIONARY_VALUES, TransactionTypeDictionaryValue } from '@/@types/transaction';
import { useState } from 'react';

import { Select } from '../shared/Select';
import styles from './styles.module.scss';

interface TransactionOptionsProps {
  type?: TransactionTypeDictionaryValue;
}
export const TransactionOptionsSelect = ({ type }: TransactionOptionsProps) => {
  const [typeTransaction, setTypeTransaction] = useState<TransactionTypeDictionaryValue | null>(type ?? null);
  return (
    <Select
      placeholder='Selecione o tipo de transação'
      options={TRANSACTIONS_TYPES_DICTIONARY_VALUES}
      value={typeTransaction}
      onChange={setTypeTransaction}
      className={styles.selectWrapper}
      name='type'
    />
  );
};
