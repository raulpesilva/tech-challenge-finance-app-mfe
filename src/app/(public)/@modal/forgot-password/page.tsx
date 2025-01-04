import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-forgot-password.png';
import { FormForgotPassword } from '@/components/FormForgotPassword';
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
        alt='Ilustração de uma pessoa de costas com dúvida, olhando um campo de senha com quatro pontos verdes.'
        width={332}
        height={220}
      />

      <Typography variant='heading1' size='xl' className={styles.title}>
        Redefinir sua senha
      </Typography>

      <Typography variant='paragraph' className={styles.text}>
        Digite o e-mail da sua conta e enviaremos um link para redefinir sua senha.
      </Typography>

      <FormForgotPassword />
    </Modal>
  );
}
