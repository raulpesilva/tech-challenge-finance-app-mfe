import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const TransactionDate = () => {
  const [date, setDate] = useState<Dayjs | null>(null);
  return (
    <div className={styles.dateWrapper}>
      <Typography variant='label'>Data</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt'}>
        <DatePicker format='DD/MM/YYYY' value={date} onChange={(value) => setDate(value)} name='date' />
      </LocalizationProvider>
    </div>
  );
};
