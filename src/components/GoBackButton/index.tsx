'use client'
import { useRouter } from 'next/navigation';
import { Button } from '../shared/Button';

export const GoBackButton = () => {
  const router = useRouter();
  return (
    <Button variant='contained' color='primary' onClick={() => router.back()}>
      Voltar
    </Button>
  );
};
