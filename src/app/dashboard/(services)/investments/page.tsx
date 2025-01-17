import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import { InvestmentCard } from '@/components/InvestmentCard';
import { InvestmentChart } from '@/components/InvestmentChart';
import { Typography } from '@/components/shared/Typography';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <section className={styles.investmentsContainer}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Investimentos
      </Typography>

      <Typography variant='heading2' size='2xl' weight='regular' className={styles.totalTitle}>
        Total: R$ 50.000,00
      </Typography>
      <div className={styles.totalContainer}>
        <InvestmentCard title='Renda Fixa' value='R$ 36.000,00' />
        <InvestmentCard title='Renda Variável' value='R$ 14.000,00' />
      </div>

      <Typography variant='heading3' size='xl' weight='regular' className={styles.statisticsTitle}>
        Estatísticas
      </Typography>
      <div className={styles.statisticsContainer} id='investment-chart'>
        <InvestmentChart />
      </div>
    </section>
  );
}
