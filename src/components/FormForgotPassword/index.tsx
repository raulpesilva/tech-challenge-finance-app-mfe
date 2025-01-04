import { Button } from '@/components/shared/Button';
import { Input } from '@/components/shared/Input';
import styles from './styles.module.scss';

export const FormForgotPassword = () => {
  return (
    <form className={styles.formContainer} action={'/forgot-password-success'} autoComplete='on'>
      <Input id='email' name='email' type='email' label='Email' placeholder='Digite seu email' required />

      <Button variant='contained' color='tertiary' type='submit' className={styles.submitButton}>
        Enviar
      </Button>
    </form>
  );
};
