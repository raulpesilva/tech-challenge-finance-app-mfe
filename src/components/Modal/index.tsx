'use client';

import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const router = useRouter();

  const handleClose = () => router.push('..');

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
