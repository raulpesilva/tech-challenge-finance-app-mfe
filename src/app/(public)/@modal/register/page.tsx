import CloseIcon from '@/assets/icons/close-icon.svg';
import bannerImage from '@/assets/images/main-banner-register.png';
import { Modal } from '@/components/Modal';
import { Button } from '@/components/shared/Button';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Checkbox } from '@/components/shared/Checkbox';
import { Input } from '@/components/shared/Input';
import { Typography } from '@/components/shared/Typography';
import { signUp } from '@/lib/auth/signUp';
import { headers } from 'next/headers';
import Image from 'next/image';
import styles from './styles.module.scss';

export default async function Page() {
  await headers();

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

      <form
        className={styles.formContainer}
        action={async (formData) => {
          'use server';
          await signUp(formData);
        }}
        autoComplete='on'
      >
        <Input id='name' name='name' label='Nome' placeholder='Digite seu nome completo' />

        <Input
          id='email'
          name='email'
          type='email'
          label='Email'
          placeholder='Digite seu email'
          className={styles.inputContainer}
        />

        <Input
          id='password'
          name='password'
          type='password'
          label='Senha'
          placeholder='Digite sua senha'
          className={styles.inputContainer}
        />

        <Checkbox
          id='term'
          color='tertiary'
          label='Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.'
          className={styles.checkboxContainer}
        />

        <Button variant='contained' color='secondary' type='submit' className={styles.submitButton}>
          Criar conta
        </Button>
      </form>
    </Modal>
  );
}
