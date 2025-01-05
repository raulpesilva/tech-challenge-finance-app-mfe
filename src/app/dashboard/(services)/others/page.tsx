import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import imageService1 from '@/assets/images/service-1.png';
import imageService2 from '@/assets/images/service-2.png';
import imageService3 from '@/assets/images/service-3.png';
import imageService4 from '@/assets/images/service-4.png';
import imageService5 from '@/assets/images/service-5.png';
import imageService6 from '@/assets/images/service-6.png';
import { Typography } from '@/components/shared/Typography';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

interface ServiceItemProps {
  image: StaticImageData;
  alt: string;
  title: string;
  href: string;
}

const services = [
  {
    image: imageService1,
    alt: 'Ícone verde de uma mão segurando um saco de dinheiro.',
    title: 'Empréstimo',
    href: '/dashboard/others/loan',
  },
  {
    image: imageService2,
    alt: 'Ícone verde representando um cartão de crédito.',
    title: 'Meus cartões',
    href: '/dashboard/others/cards',
  },
  {
    image: imageService3,
    alt: 'Ícone verde de uma mão segurando um coração.',
    title: 'Doações',
    href: '/dashboard/others/donations',
  },
  {
    image: imageService4,
    alt: 'Ícone verde do Pix.',
    title: 'Pix',
    href: '/dashboard/others/pix',
  },
  {
    image: imageService5,
    alt: 'Ícone verde de um escudo com um guarda-chuva dentro.',
    title: 'Seguros',
    href: '/dashboard/others/insurance',
  },
  {
    image: imageService6,
    alt: 'Ícone verde de um aparelho celular.',
    title: 'Crédito celular',
    href: '/dashboard/others/cell-phone-credit',
  },
];

const ServiceItem = ({ image, alt, title, href }: ServiceItemProps) => {
  return (
    <li className={styles.service}>
      <Link href={href} aria-label={`Serviço de ${title}>`}>
        <Image src={image} alt={alt} width={60} height={60} />

        <Typography variant='heading2' color='primary' size='base' className={styles.subTitle}>
          {title}
        </Typography>
      </Link>
    </li>
  );
};

export default function Page() {
  return (
    <section className={styles.servicesContainer}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Confira os serviços disponíveis
      </Typography>

      <ul className={styles.servicesList}>
        {services.map((service, i) => (
          <ServiceItem key={`service-${i}`} {...service} />
        ))}
      </ul>
    </section>
  );
}
