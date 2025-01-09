import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface InvestmentCardProps {
  title: string;
  value: string;
}

export const InvestmentCard = ({ title, value }: InvestmentCardProps) => {
  return (
    <section className={styles.container}>
      <Typography variant='heading1' size='base' weight='regular' color='gray50' className={styles.title}>
        {title}
      </Typography>

      <Typography variant='paragraph' size='xl' weight='regular' color='secondary' className={styles.value}>
        {value}
      </Typography>
    </section>
  );
};
