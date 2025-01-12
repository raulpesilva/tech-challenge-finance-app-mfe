import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface TransactionDateProps {
  initialDate: Dayjs | null;
}
export const TransactionDate = ({ initialDate }: TransactionDateProps) => {
  const [date, setDate] = useState<Dayjs | null>(initialDate ?? null);
  return (
    <div className={styles.dateWrapper}>
      <Typography variant='label'>Data</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt'}>
        <DatePicker format='DD/MM/YYYY' value={date} onChange={(value) => setDate(value)} name='date' />
      </LocalizationProvider>
    </div>
  );
};
