import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const MenuServicesApp = () => {
  return (
    <div className={styles.container}>
      <ButtonLink href='/dashboard' variant='text' color='cta' className={styles.link} replace>
        Início
      </ButtonLink>

      <ButtonLink href='/dashboard/transactions' variant='text' color='cta' className={styles.link} replace>
        Transferências
      </ButtonLink>

      <ButtonLink href='/dashboard/investments' variant='text' color='cta' className={styles.link} replace>
        Investimentos
      </ButtonLink>

      <ButtonLink href='/dashboard/others' variant='text' color='cta' className={styles.link} replace>
        Outros serviços
      </ButtonLink>
    </div>
  );
};
