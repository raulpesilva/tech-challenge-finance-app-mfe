import { NotFoundContainer } from "@/components/NotFoundContainer";
import styles from "./styles.module.scss";

export default function NotFound() {
  return (
    <main className={styles.notFoundMain}>
      <NotFoundContainer />
    </main>
  );
}
