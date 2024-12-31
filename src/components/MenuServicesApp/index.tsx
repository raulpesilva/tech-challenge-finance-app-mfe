import { NavLink } from '../shared/NavLink';
import styles from './styles.module.scss';

export const MenuServicesApp = () => {
  return (
    <div className={styles.container}>
      <NavLink href='/dashboard' color='cta' colorActive='secondary' replace>
        Início
      </NavLink>

      <NavLink href='/dashboard/transactions' color='cta' colorActive='secondary' replace>
        Transferências
      </NavLink>

      <NavLink href='/dashboard/investments' color='cta' colorActive='secondary' replace>
        Investimentos
      </NavLink>

      <NavLink href='/dashboard/others' color='cta' colorActive='secondary' replace>
        Outros serviços
      </NavLink>
    </div>
  );
};
