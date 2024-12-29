import { NotFoundContainer } from "@/components/NotFoundContainer";
import { headers } from "next/headers";
import Page from "../page";
import styles from "./styles.module.scss";

const publicRoutes = ["/login", "/register"];

export default async function NotFound() {
  const header = await headers();
  const pathname = header.get("x-current-path");

  if (publicRoutes.some((route) => pathname?.includes(route))) return <Page />;

  return (
    <main className={styles.notFoundMain}>
      <NotFoundContainer />
    </main>
  );
}
