'use client';

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

const options = ['Depósito', 'Retirada', 'Transferência', 'Investimento'];

export const FormTransaction = () => {
  const [typeTransaction, setTypeTransaction] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);

  console.log(typeTransaction, date?.format('DD/MM/YYYY'));

  return (
    <form className={styles.formWrapper}>
      <Select
        placeholder='Selecione o tipo de transação'
        options={options}
        value={typeTransaction}
        onChange={setTypeTransaction}
        className={styles.selectWrapper}
      />

      <Input
        id='value'
        name='value'
        label='Valor'
        placeholder='Digite o valor da transação'
        textAlign='center'
        className={styles.valueWrapper}
      />

      <div className={styles.dateWrapper}>
        <Typography variant='label'>Data</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt'}>
          <DatePicker format='DD/MM/YYYY' value={date} onChange={(newValue) => setDate(newValue)} />
        </LocalizationProvider>
      </div>

      <Button variant='contained' color='primary' className={styles.submitButton}>
        Concluir transação
      </Button>
    </form>
  );
};
