import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-login.png';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/shared/Button';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Input } from '@/components/shared/Input';
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

      <form
        className={styles.formContainer}
        action={async (formData) => {
          'use server';
          await signIn(formData);
        }}
        autoComplete='on'
      >
        <Input id='email' name='email' type='email' label='Email' placeholder='Digite seu email' />

        <Input
          id='password'
          name='password'
          type='password'
          label='Senha'
          placeholder='Digite sua senha'
          className={styles.passwordInput}
        />

        {/* TODO: set link to forgot password */}
        <ButtonLink href='/' variant='text' color='tertiary' className={styles.forgotPassword}>
          Esqueci a senha!
        </ButtonLink>

        <Button variant='contained' color='tertiary' type='submit' className={styles.submitButton}>
          Acessar
        </Button>
      </form>
    </Modal>
  );
}
