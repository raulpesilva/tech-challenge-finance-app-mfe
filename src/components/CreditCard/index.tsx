import { PublicUser } from '@/@types/users';
import CardIcon from '@/assets/icons/card-icon.svg';
import GridCardIcon from '@/assets/icons/grid-card.svg';
import { Button } from '@/components/shared/Button';
import { Typography } from '@/components/shared/Typography';
import { combineStyles } from '@/utils/combineStyles';
import { capitalize } from '@/utils/string';
import { Montserrat } from 'next/font/google';
import styles from './styles.module.scss';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'] });

interface CreditCardProps {
  type: 'virtual' | 'physical';
  cardNumber: string;
  cardFunction: string;
  user: PublicUser | null;
}

export const CreditCard = ({ type, cardNumber, cardFunction, user }: CreditCardProps) => {
  const userName = user?.name || user?.email;

  return (
    <div className={styles.container}>
      <div className={combineStyles([styles.card, styles[type]])}>
        <GridCardIcon className={styles.cardGridIcon} />
        <CardIcon className={styles.cardIcon} />

        <Typography
          variant='paragraph'
          color='secondary'
          className={combineStyles([montserrat.className, styles.cardType])}
        >
          Platinum
        </Typography>

        <Typography
          variant='paragraph'
          size='sm'
          color='secondary'
          className={combineStyles([montserrat.className, styles.cardHolder])}
        >
          {capitalize(userName ?? 'Usuário')}
        </Typography>

        <Typography variant='paragraph' size='sm' color='secondary' className={styles.cardNumber}>
          {cardNumber}
        </Typography>
      </div>

      <div className={styles.actions}>
        <Button variant='contained' color='secondary' className={styles.button} disabled>
          Configurar
        </Button>
        <Button variant='outlined' color='error' className={styles.button} disabled>
          Bloquear
        </Button>
        <Typography variant='paragraph' className={styles.function}>
          Função: {cardFunction}
        </Typography>
      </div>
    </div>
  );
};
