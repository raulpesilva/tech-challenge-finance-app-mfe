import GridBottomIcon from '@/assets/icons/grid-bottom.svg';
import GridTopIcon from '@/assets/icons/grid-top.svg';
import imageBanner from '@/assets/images/main-banner-account.png';

import { updateUserAction, UpdateUserResponse } from '@/actions/user';
import { AccountForm } from '@/components/AccountForm';
import { Typography } from '@/components/shared/Typography';
import { getUser } from '@/lib/auth/getUser';
import Image from 'next/image';
import styles from './styles.module.scss';

export const InitialUpdateUserResponse = {
  inputs: { name: '', email: '', password: '' },
  errors: {},
  success: true,
} satisfies UpdateUserResponse;

export default async function Page() {
  const user = await getUser();
  return (
    <div className={styles.pageContainer}>
      <GridTopIcon className={styles.gridTop} />
      <GridBottomIcon className={styles.gridBottom} />

      <Typography variant='heading1' className={styles.title}>
        Minha conta
      </Typography>

      <div className={styles.content}>
        <Image
          src={imageBanner}
          alt='Ilustração de uma pessoa em frente a uma tela grande com texto e botões deslizantes, parecendo ajustar ou interagir com o conteúdo.'
          width={446}
          height={381}
          priority
          className={styles.banner}
        />
        <AccountForm
          updateUser={async (prev, formData) => {
            'use server';
            return await updateUserAction(prev, formData);
          }}
          initialUser={{ ...InitialUpdateUserResponse, inputs: { ...InitialUpdateUserResponse.inputs, ...user } }}
        />
      </div>
    </div>
  );
}
