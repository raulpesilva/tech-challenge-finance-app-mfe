'use client';

import { Button } from '@/components/shared/Button';
import { ButtonLink } from '@/components/shared/ButtonLink';
import { Input } from '@/components/shared/Input';
import { Typography } from '@/components/shared/Typography';
import { InitialSignInResponse } from '@/lib/auth/constantes';
import { SignInResponse } from '@/lib/auth/definitions';
import { useActionState } from 'react';
import styles from './styles.module.scss';

interface FormSignInProps {
  signIn: (state: SignInResponse, payload: FormData) => Promise<SignInResponse>;
}

export const FormSignIn = ({ signIn }: FormSignInProps) => {
  const [state, action, isPending] = useActionState(signIn, InitialSignInResponse);
  return (
    <form className={styles.formContainer} action={action} autoComplete='on'>
      <Input
        id='email'
        name='email'
        type='email'
        label='Email'
        placeholder='Digite seu email'
        defaultValue={state?.inputs.email}
      />
      {state?.errors?.email?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          - {error}
        </Typography>
      ))}

      <Input
        id='password'
        name='password'
        type='password'
        label='Senha'
        placeholder='Digite sua senha'
        className={styles.passwordInput}
        defaultValue={state?.inputs.password}
      />
      {state?.errors?.password?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          - {error}
        </Typography>
      ))}
      {state?.message && (
        <Typography variant='span' color='error' className={styles.errorMessage}>
          - {state?.message}
        </Typography>
      )}
      {/* TODO: set link to forgot password */}
      <ButtonLink href='/' variant='text' color='tertiary' className={styles.forgotPassword}>
        Esqueci a senha!
      </ButtonLink>

      <Button variant='contained' color='tertiary' type='submit' loading={isPending} className={styles.submitButton}>
        Acessar
      </Button>
    </form>
  );
};
