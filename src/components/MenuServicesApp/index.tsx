import { NavLink } from '@/components/shared/NavLink';
import { combaneStyles } from '@/utils/combaneStyles';
import styles from './styles.module.scss';

interface MenuServicesAppProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  colorActive?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'cta' | 'ctaForeground';
  className?: string;
}

export const MenuServicesApp = ({ color = 'cta', colorActive = 'secondary', className }: MenuServicesAppProps) => {
  return (
    <div className={combaneStyles([styles.container, className && className])}>
      <NavLink href='/dashboard' color={color} colorActive={colorActive} replace>
        Início
      </NavLink>

      <NavLink href='/dashboard/transactions' color={color} colorActive={colorActive} replace>
        Transferências
      </NavLink>

      <NavLink href='/dashboard/investments' color={color} colorActive={colorActive} replace>
        Investimentos
      </NavLink>

      <NavLink href='/dashboard/others' color={color} colorActive={colorActive} replace>
        Outros serviços
      </NavLink>
    </div>
  );
};
