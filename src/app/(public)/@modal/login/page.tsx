import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-login.png';
import { FormSignIn } from '@/components/FormSignIn';
import { Modal } from '@/components/Modal';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Typography } from '@/components/shared/Typography';
import { signIn } from '@/lib/auth/signIn';
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
        alt='Ilustração de uma pessoa ao lado de um smartphone exibindo uma interface de configurações com um botão de alternância ativado.'
        width={332}
        height={266}
      />

      <Typography variant='heading1' size='xl' className={styles.title}>
        Login
      </Typography>
      <FormSignIn
        signIn={async (prev, formData) => {
          'use server';
          return await signIn(prev, formData);
        }}
      />
    </Modal>
  );
}
