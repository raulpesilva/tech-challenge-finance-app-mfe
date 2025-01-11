import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import imageBanner from '@/assets/images/main-banner-dashboard.png';
import { FormTransaction } from '@/components/FormTransaction';
import { Typography } from '@/components/shared/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <section className={styles.transactionsContent}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Transferências
      </Typography>

      <div className={styles.content}>
        <FormTransaction type='Transferência' />

        <Image
          src={imageBanner}
          alt='Ilustração de uma pessoa estilizada segurando um cartão de crédito grande, vestida com roupa escura e botas, com uma planta ao lado.'
          width={328}
          height={231}
          className={styles.banner}
        />
      </div>
    </section>
  );
}
