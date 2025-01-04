import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-forgot-password-success.png';
import { Modal } from '@/components/Modal';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Typography } from '@/components/shared/Typography';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <Modal>
      <ButtonLink href='..' variant='text' color='cta' aria-label='Fechar modal' className={styles.closeButton}>
        <CloseIcon />
      </ButtonLink>

      <Image
        className={styles.bannerImage}
        src={bannerImage}
        alt='Ilustração de uma pessoa em pé apontando para um grande ícone verde de check, indicando aprovação ou confirmação.'
        width={332}
        height={284}
      />

      <Typography variant='heading1' size='xl' className={styles.title}>
        Enviado com sucesso!
      </Typography>

      <Typography variant='paragraph' className={styles.text}>
        Verifique seu e-mail e siga as instruções para redefinir sua senha.
      </Typography>

      <ButtonLink href='/login' variant='contained' color='tertiary' className={styles.backButton}>
        Voltar para o login
      </ButtonLink>
    </Modal>
  );
}
