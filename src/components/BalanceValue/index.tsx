'use client';

import EyeCloseIcon from '@/assets/icons/eye-close-icon.svg';
import EyeIcon from '@/assets/icons/eye-icon.svg';
import { dispatchShowBalanceValue, useShowBalanceValue } from '@/states/showBalanceValue';
import { formatCurrency } from '@/utils/formatCurrency';
import { Button } from '../shared/Button';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface BalanceValueProps {
  balance: number;
}
export const BalanceValue = ({ balance }: BalanceValueProps) => {
  const [showBalanceValue] = useShowBalanceValue();
  const handleShowValue = () => dispatchShowBalanceValue(!showBalanceValue);

  return (
    <div className={styles.balanceValueContainer}>
      <Button variant='text' color='ctaForeground' className={styles.button} onClick={handleShowValue}>
        Saldo
        {showBalanceValue && <EyeIcon />}
        {!showBalanceValue && <EyeCloseIcon />}
      </Button>

      <Typography variant='paragraph' color='secondary' className={styles.title}>
        Conta Corrente
      </Typography>

      <div className={styles.amountWrapper}>
        {showBalanceValue && (
          <Typography variant='heading2' color='secondary' size='4xl' weight='regular' className={styles.amount}>
            {formatCurrency(balance / 100) || '0,00'}
          </Typography>
        )}

        {!showBalanceValue && (
          <Typography variant='heading2' color='secondary' size='4xl' weight='regular' className={styles.mask}>
            ****
          </Typography>
        )}
      </div>
    </div>
  );
};
