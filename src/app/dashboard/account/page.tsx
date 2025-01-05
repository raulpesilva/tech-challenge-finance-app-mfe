import EditIcon from '@/assets/icons/edit-icon.svg';
import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import imageBanner from '@/assets/images/main-banner-account.png';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { Typography } from '@/components/shared/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Minha conta
      </Typography>

      <div className={styles.content}>
        <Image
          src={imageBanner}
          alt='Ilustração de uma pessoa em frente a uma tela grande com texto e botões deslizantes, parecendo ajustar ou interagir com o conteúdo.'
          width={446}
          height={381}
          priority
          className={styles.banner}
        />

        <form className={styles.formContainer}>
          <Input id='name' name='name' label='Nome' placeholder='Digite seu nome completo' iconRight={<EditIcon />} />
          <Input id='email' name='email' label='E-mail' placeholder='Digite seu e-mail' iconRight={<EditIcon />} />
          <Input id='password' name='password' label='Senha' placeholder='Digite sua senha' iconRight={<EditIcon />} />
          <Button variant='contained' color='secondary' type='submit' className={styles.submitButton}>
            Salvar alterações
          </Button>
        </form>
      </div>
    </div>
  );
}
