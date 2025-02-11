'use client';

import { Button } from '@/components/shared/Button';
import { useFormStatus } from 'react-dom';
import styles from './styles.module.scss';

export const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant='text' color='cta' loading={pending} className={styles.logoutButton}>
      Sair
    </Button>
  );
};
