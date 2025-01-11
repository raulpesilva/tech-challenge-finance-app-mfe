import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import { CreditCard } from '@/components/CreditCard';
import { Typography } from '@/components/shared/Typography';
import styles from './styles.module.scss';

export default async function Page() {
  return (
    <section className={styles.pageContainer}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Meus cartões
      </Typography>

      <Typography variant='heading2' weight='regular' className={styles.subTitle}>
        Cartão físico
      </Typography>
      <CreditCard type='physical' cardNumber='**** **** **** 1234' cardFunction='Débito/Crédito' />

      <Typography variant='heading2' weight='regular' className={styles.subTitle}>
        Cartão digital
      </Typography>
      <CreditCard type='virtual' cardNumber='**** **** **** 6789' cardFunction='Débito' />
    </section>
  );
}
