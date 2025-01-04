import { ExtractSummary } from '@/components/ExtractSummary';
import styles from './styles.module.scss';

export default function Page() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.pageContent}>Dashboard</section>
      <ExtractSummary />
    </div>
  );
}
