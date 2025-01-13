'use client';

import { UpdateUserResponse } from '@/actions/user';
import EditIcon from '@/assets/icons/edit-icon.svg';
import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { useActionState } from 'react';
import { Typography } from '../shared/Typography';
import styles from './styles.module.scss';

interface FormUpdateUserProps {
  updateUser: (state: UpdateUserResponse, payload: FormData) => Promise<UpdateUserResponse>;
  initialUser: UpdateUserResponse;
}

export const FormAccount = ({ updateUser, initialUser }: FormUpdateUserProps) => {
  const [state, action, isPending] = useActionState(updateUser, initialUser);

  return (
    <form className={styles.formContainer} action={action}>
      <Input
        id='name'
        name='name'
        label='Nome'
        placeholder='Digite seu nome completo'
        iconRight={<EditIcon />}
        defaultValue={state.inputs.name}
      />
      {state?.errors?.name?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      <Input
        id='email'
        name='email'
        label='E-mail'
        placeholder='Digite seu e-mail'
        iconRight={<EditIcon />}
        defaultValue={state.inputs.email}
        className={styles.inputContainer}
      />
      {state?.errors?.email?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      <Input
        id='password'
        name='password'
        label='Senha'
        placeholder='Digite sua senha'
        iconRight={<EditIcon />}
        defaultValue={state.inputs.password}
        className={styles.inputContainer}
      />
      {state?.errors?.password?.map((error) => (
        <Typography variant='span' color='error' key={error} className={styles.errorMessage}>
          {error}
        </Typography>
      ))}
      {state?.message && (
        <Typography variant='span' color='error' className={styles.errorMessage}>
          {state?.message}
        </Typography>
      )}
      <Button variant='contained' color='secondary' type='submit' className={styles.submitButton} loading={isPending}>
        Salvar alterações
      </Button>
    </form>
  );
};
