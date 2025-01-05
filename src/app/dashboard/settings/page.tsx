import { UnderConstruction } from '@/components/UnderConstruction';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <UnderConstruction />
    </div>
  );
}
