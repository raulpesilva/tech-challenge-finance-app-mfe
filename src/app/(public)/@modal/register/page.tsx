import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-register.png';
import { FormSignUp } from '@/components/FormSignUp';
import { Modal } from '@/components/Modal';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Typography } from '@/components/shared/Typography';
import { signUp } from '@/lib/auth/signUp';
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
        alt='Ilustração de uma pessoa ao lado de um notebook com um cadeado representando segurança digital.'
        width={354}
        height={260}
      />

      <Typography variant='heading1' size='xl' className={styles.title}>
        Preencha os campos abaixo para criar sua conta corrente!
      </Typography>

      <FormSignUp
        signUp={async (prev, formData) => {
          'use server';
          return await signUp(prev, formData);
        }}
      />

      <div className={styles.registerLink}>
        <Typography variant='paragraph' color='primary'>
          Já possui uma conta?
        </Typography>
        <ButtonLink href='/login' variant='text' color='secondary'>
          Entre aqui!
        </ButtonLink>
      </div>
    </Modal>
  );
}
