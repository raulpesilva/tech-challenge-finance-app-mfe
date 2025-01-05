import imageBanner from '@/assets/images/main-banner-under-construction.png';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Typography } from '@/components/shared/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

export const UnderConstruction = () => {
  return (
    <section>
      <Typography variant='heading1' className={styles.title}>
        Ops! Esta página está em construção...
      </Typography>

      <div className={styles.textWrapper}>
        <Typography variant='paragraph'>Estamos providenciando o melhor conteúdo para você!</Typography>
        <Typography variant='paragraph'>Aguarde!</Typography>
      </div>

      <ButtonLink href='/' variant='contained' color='tertiary' className={styles.button}>
        Voltar ao início
      </ButtonLink>

      <Image
        src={imageBanner}
        alt='Ilustração de dois trabalhadores de capacete e colete verde construindo a estrutura de uma casa, com árvores ao fundo.'
        width={470}
        height={290}
        priority
        className={styles.banner}
      />
    </section>
  );
};
