import imageBanner from '@/assets/images/main-banner-under-construction.png';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Typography } from '@/components/shared/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

interface UnderConstructionProps {
  service?: boolean;
}

export const UnderConstruction = ({ service }: UnderConstructionProps) => {
  return (
    <section>
      <Typography variant='heading1' className={styles.title}>
        {service ? 'Ops! Este serviço está em construção...' : 'Ops! Esta página está em construção...'}
      </Typography>

      <div className={styles.textWrapper}>
        <Typography variant='paragraph'>Estamos providenciando o melhor conteúdo para você!</Typography>
        <Typography variant='paragraph'>Aguarde!</Typography>
      </div>

      <ButtonLink
        href={service ? '/dashboard/others' : '/'}
        variant='contained'
        color='tertiary'
        className={styles.button}
      >
        {service ? 'Voltar aos serviços' : 'Voltar ao início'}
      </ButtonLink>
      <Image
        src={imageBanner.src}
        alt='Ilustração de dois trabalhadores de capacete e colete verde construindo a estrutura de uma casa, com árvores ao fundo.'
        width={470}
        height={290}
        priority
        className={styles.banner}
      />
    </section>
  );
};
