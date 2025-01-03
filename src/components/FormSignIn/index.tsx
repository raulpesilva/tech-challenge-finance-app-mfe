'use client';

import { InitialSignInResponse } from '@/lib/auth/constantes';
import { SignInResponse } from '@/lib/auth/definitions';
import { useActionState } from 'react';
import { Button } from '../shared/Button';
import { ButtonLink } from '../shared/ButtonLink';
import { Input } from '../shared/Input';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface FormSignInProps {
  signIn: (state: SignInResponse, payload: FormData) => Promise<SignInResponse>;
}

export const FormSignIn = ({ signIn }: FormSignInProps) => {
  const [state, action, isPending] = useActionState(signIn, InitialSignInResponse);
  console.log({ state, InitialSignInResponse });
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
        <Typography variant='span' color='error' key={error}>
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
        <Typography variant='span' color='error' key={error}>
          - {error}
        </Typography>
      ))}

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
