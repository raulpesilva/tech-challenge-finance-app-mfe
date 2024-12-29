import { ButtonLink } from "@/components/shared/ButtonLink";
import { Typography } from "@/components/shared/Typography";
import { headers } from "next/headers";
import Page from "../page";
import styles from "./styles.module.scss";

const publicRoutes = ["/login", "/register"];

export default async function NotFound() {
  const header = await headers();
  const pathname = header.get("x-current-path");

  if (publicRoutes.some((route) => pathname?.includes(route))) return <Page />;

  return (
    <main className={styles.main}>
      <Typography variant="heading1">
        Ops! Não encontramos a página...{" "}
      </Typography>

      <Typography variant="paragraph">
        E olha que exploramos o universo procurando por ela! Que tal voltar e
        tentar novamente?
      </Typography>

      <ButtonLink href="/" variant="contained" color="secondary">
        Voltar ao início
      </ButtonLink>
    </main>
  );
}
