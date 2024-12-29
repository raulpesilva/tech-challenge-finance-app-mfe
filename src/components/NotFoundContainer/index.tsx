import Image from "next/image";
import imageBanner from "../../assets/images/main-banner-not-found.png";
import { ButtonLink } from "../shared/ButtonLink";
import { Typography } from "../shared/Typography";
import styles from "./styles.module.scss";

export const NotFoundContainer = () => {
  return (
    <section className={styles.container}>
      <Typography variant="heading1" className={styles.title}>
        Ops! Não encontramos a página...
      </Typography>

      <div className={styles.textWrapper}>
        <Typography variant="paragraph">
          E olha que exploramos o universo procurando por ela!
        </Typography>
        <Typography variant="paragraph">
          Que tal voltar e tentar novamente?
        </Typography>
      </div>

      <ButtonLink
        href="/"
        variant="contained"
        color="secondary"
        className={styles.button}
      >
        Voltar ao início
      </ButtonLink>

      <Image
        src={imageBanner}
        alt="Ilustração de um espaço em formato de lua mostrando uma mensagem 404 - Página não encontrada"
        width={470}
        height={354}
        priority
        className={styles.banner}
      />
    </section>
  );
};
