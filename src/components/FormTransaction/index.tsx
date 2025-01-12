'use client';

import { maskCurrency } from '@/utils/masks/maskCurrency';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/pt';
import { useState } from 'react';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Select } from '../shared/Select';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

const options = ['Depósito', 'Retirada', 'Transferência', 'Investimento'] as const;
type Options = typeof options;
interface FormTransactionProps {
  type?: Options[number];
}

export const FormTransaction = ({ type }: FormTransactionProps) => {
  const [typeTransaction, setTypeTransaction] = useState<Options[number] | null>(type ?? null);
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <form
      className={styles.formWrapper}
      action={(formdata) => {
        console.log('type', formdata.get('type'));
        console.log('value', formdata.get('value'));
        console.log('date', formdata.get('date'));
      }}
    >
      <Select
        placeholder='Selecione o tipo de transação'
        options={options}
        value={typeTransaction}
        onChange={setTypeTransaction}
        className={styles.selectWrapper}
        name='type'
      />

      <Input
        id='value'
        name='value'
        label='Valor'
        placeholder='Digite o valor da transação'
        onInput={(e) => (e.currentTarget.value = maskCurrency(e.currentTarget.value))}
        className={styles.valueWrapper}
      />

      <div className={styles.dateWrapper}>
        <Typography variant='label'>Data</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt'}>
          <DatePicker format='DD/MM/YYYY' value={date} onChange={(value) => setDate(value)} name='date' />
        </LocalizationProvider>
      </div>

      <Button variant='contained' color='primary' className={styles.submitButton}>
        Concluir transação
      </Button>
    </form>
  );
};
