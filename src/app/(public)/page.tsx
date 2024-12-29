import { ButtonLink } from "@/components/shared/ButtonLink";
import { Typography } from "@/components/shared/Typography";
import Image, { StaticImageData } from "next/image";
import imageBenefit1 from "../../assets/images/benefit-1.png";
import imageBenefit2 from "../../assets/images/benefit-2.png";
import imageBenefit3 from "../../assets/images/benefit-3.png";
import imageBenefit4 from "../../assets/images/benefit-4.png";
import imageBanner from "../../assets/images/main-banner-home.png";
import styles from "./styles.module.scss";

interface BenefitItemProps {
  image: StaticImageData;
  alt: string;
  title: string;
  text: string;
}

const benefits = [
  {
    image: imageBenefit1,
    alt: "Ícone verde de um presente com laço.",
    title: "Conta e cartão gratuitos",
    text: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.",
  },
  {
    image: imageBenefit2,
    alt: "Ícone verde representando uma mão inserindo um cartão em um terminal de transação financeira.",
    title: "Saques sem custo",
    text: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.",
  },
  {
    image: imageBenefit3,
    alt: "Ícone verde representando uma estrela.",
    title: "Programa de pontos",
    text: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!",
  },
  {
    image: imageBenefit4,
    alt: "Ícone verde representando três dispositivos: computador, tablet e celular.",
    title: "Seguro Dispositivos",
    text: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.",
  },
];

const BenefitItem = ({ image, alt, title, text }: BenefitItemProps) => {
  return (
    <div className={styles.benefit}>
      <Image src={image} alt={alt} width={73} height={56} />
      <Typography variant="heading2" color="success" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="paragraph" color="gray400" className={styles.text}>
        {text}
      </Typography>
    </div>
  );
};

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.bannerContainer}>
        <Typography
          variant="heading1"
          size="3xl"
          weight="semiBold"
          className={styles.title}
        >
          Experimente mais liberdade no controle da sua vida financeira. Crie
          sua conta com a gente!
        </Typography>

        <Image
          className={styles.banner}
          src={imageBanner}
          alt="Ilustração de um gráfico de barras verdes com uma pessoa segurando dinheiro, simbolizando crescimento financeiro."
          width={660}
          height={412}
          priority
        />

        <div className={styles.buttonsWrapper}>
          <ButtonLink
            href="/register"
            variant="contained"
            color="cta"
            className={styles.button}
          >
            Abrir conta
          </ButtonLink>

          <ButtonLink
            href="/login"
            variant="outlined"
            color="cta"
            className={styles.button}
          >
            Já tenho conta
          </ButtonLink>
        </div>
      </section>

      <section className={styles.benefitsContainer}>
        <Typography variant="heading1" className={styles.title}>
          Vantagens do nosso banco:
        </Typography>

        <div className={styles.benefitsWrapper}>
          {benefits.map((benefit, i) => (
            <BenefitItem key={`benefit-${i}`} {...benefit} />
          ))}
        </div>
      </section>
    </main>
  );
}
