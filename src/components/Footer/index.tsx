import Instagram from "@/assets/icons/instagram-icon.svg";
import Whatsapp from "@/assets/icons/whatsapp-icon.svg";
import YouTube from "@/assets/icons/youtube-icon.svg";
import { combaneStyles } from "@/utils/combaneStyles";
import Link from "next/link";
import { LogoType } from "../LogoType";
import styles from "./styles.module.scss";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Serviços</h2>
          <Link href="/">Conta corrente</Link>
          <Link href="/">Conta PJ</Link>
          <Link href="/">Cartão de crédito</Link>
        </div>

        <div className={styles.content}>
          <h2>Contato</h2>
          <ExternalLink href="tel:080000425008">0800 004 250 08</ExternalLink>
          <ExternalLink href="mailto:meajuda@bytebank.com.br">
            meajuda@bytebank.com.br
          </ExternalLink>
          <ExternalLink href="mailto:ouvidoria@bytebank.com.br">
            ouvidoria@bytebank.com.br
          </ExternalLink>
        </div>

        <div className={combaneStyles([styles.content, styles.content3])}>
          <h2>Desenvolvido por Alura</h2>
          <LogoType />

          <div className={styles.socialMediaWrapper}>
            <ExternalLink href="https://www.instagram.com/">
              <Instagram />
            </ExternalLink>
            <ExternalLink href="https://www.whatsapp.com/">
              <Whatsapp />
            </ExternalLink>
            <ExternalLink href="https://www.youtube.com/">
              <YouTube />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
