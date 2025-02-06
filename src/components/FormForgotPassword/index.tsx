import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import { ButtonLink } from '../shared/ButtonLink';
import styles from './styles.module.scss';

export const FormForgotPassword = () => {
  return (
    <form className={styles.formContainer} action={'/forgot-password-success'} autoComplete='on'>
      <Input id='email' name='email' type='email' label='Email' placeholder='Digite seu email' required />

      <div className={styles.buttonsContainer}>
        <ButtonLink href='/login' variant='outlined' color='tertiary' className={styles.forgotPassword}>
          Voltar
        </ButtonLink>

        <Button variant='contained' color='tertiary' type='submit' className={styles.submitButton}>
          Enviar
        </Button>
      </div>
    </form>
  );
};
