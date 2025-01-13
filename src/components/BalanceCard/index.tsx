import GridBottomIcon from '@/assets/icons/grid-balance-card-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-balance-card-top.svg';
import imageBanner from '@/assets/images/banner-balance-card.png';
import { getUser } from '@/lib/auth/getUser';
import { getTransactionsByUser } from '@/services/transaction';
import { fullDate } from '@/utils/date/fullDate';
import { capitalize } from '@/utils/string';
import Image from 'next/image';
import { BalanceValue } from '../BalanceValue';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

export const BalanceCard = async () => {
  const session = await getUser();
  const userName = session?.name?.split(' ')[0] || session?.email;
  const welcomeMessage = `Olá, ${capitalize(userName ?? 'Usuário')}! :)`;
  const date = fullDate();
  const transactions = session?.id
    ? await getTransactionsByUser(session.id, { type: ['deposit', 'withdraw', 'transfer'] })
    : [];
  const balance = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') return acc + transaction.value;
    if (transaction.type === 'withdraw') return acc - transaction.value;
    if (transaction.type === 'transfer') return acc - transaction.value;
    return acc;
  }, 0);

  return (
    <section className={styles.container}>
      <GridTopIcon className={styles.gridTopIcon} />
      <GridBottomIcon className={styles.gridBottomIcon} />

      <Typography variant='heading1' weight='semiBold' color='secondary' className={styles.title}>
        {welcomeMessage}
      </Typography>

      <Typography variant='span' color='secondary' className={styles.date}>
        {date}
      </Typography>

      <div className={styles.content}>
        <Image
          src={imageBanner}
          alt='Ilustração de uma pessoa colocando uma moeda com símbolo de dólar em um cofrinho em forma de porco.'
          width={283}
          height={228}
          priority
          className={styles.banner}
        />

        <BalanceValue balance={balance} />
      </div>
    </section>
  );
};
