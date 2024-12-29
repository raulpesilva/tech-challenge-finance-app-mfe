import { HeaderMenu } from '../HeaderMenu';
import { Logo } from '../Logo';
import { LogoType } from '../LogoType';
import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.linksContent}>
          <LogoType className={styles.logoType} />
          <Logo className={styles.logo} />
          <HeaderMenu />
        </div>

        <div className={styles.ctaContent}>
          <ButtonLink href='/register' variant='contained' color='tertiary' className={styles.cta}>
            Abrir conta
          </ButtonLink>

          <ButtonLink href='/login' variant='outlined' color='tertiary' className={styles.cta}>
            Já tenho conta
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
