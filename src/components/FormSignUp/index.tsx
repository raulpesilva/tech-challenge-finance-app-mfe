'use client';

import { Button } from '@/components/shared/Button';
import { Checkbox } from '@/components/shared/Checkbox';
import { Input } from '@/components/shared/Input';
import { Typography } from '@/components/shared/Typography';
import { InitialSignUpResponse } from '@/lib/auth/constantes';
import { SignUpResponse } from '@/lib/auth/definitions';
import { useActionState } from 'react';
import styles from './styles.module.scss';

interface FormSignUpProps {
  signUp: (state: SignUpResponse, payload: FormData) => Promise<SignUpResponse>;
}

export const FormSignUp = ({ signUp }: FormSignUpProps) => {
  const [state, action, isPending] = useActionState(signUp, InitialSignUpResponse);
  return (
    <form className={styles.formContainer} action={action} autoComplete='on'>
      <Input
        id='name'
        name='name'
        label='Nome'
        placeholder='Digite seu nome completo'
        defaultValue={state?.inputs?.name}
      />
      {state?.errors?.name?.map((error) => (
        <Typography variant='span' color='error' key={error}>
          - {error}
        </Typography>
      ))}
      <Input
        id='email'
        name='email'
        type='email'
        label='Email'
        placeholder='Digite seu email'
        className={styles.inputContainer}
        defaultValue={state?.inputs?.email}
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
        className={styles.inputContainer}
        defaultValue={state?.inputs?.password}
      />
      {state?.errors?.password?.map((error) => (
        <Typography variant='span' color='error' key={error}>
          - {error}
        </Typography>
      ))}

      <Checkbox
        id='term'
        name='acceptedTerm'
        color='tertiary'
        label='Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.'
        className={styles.checkboxContainer}
        defaultChecked={state?.inputs?.acceptedTerm === 'on'}
      />
      {state?.errors?.acceptedTerm?.map((error) => (
        <Typography variant='span' color='error' key={error}>
          - {error}
        </Typography>
      ))}
      {state?.message && (
        <Typography variant='span' color='error'>
          - {state?.message}
        </Typography>
      )}

      <Button variant='contained' color='secondary' type='submit' loading={isPending} className={styles.submitButton}>
        Criar conta
      </Button>
    </form>
  );
};
