import { logout } from '@/actions/auth/logout';
import { redirect } from 'next/navigation';
import { Button } from '../shared/Button';
import { ButtonLink } from '../shared/ButtonLink';

export const MenuAccount = () => {
  return (
    <div>
      {/* TODO: Add account link */}
      <ButtonLink href='/dashboard/account' variant='text' color='tertiary' replace>
        Minha conta
      </ButtonLink>

      {/* TODO: Add settings link */}
      <ButtonLink href='/dashboard/settings' variant='text' color='tertiary' replace>
        Configurações
      </ButtonLink>

      <Button
        variant='outlined'
        color='secondary'
        onClick={async () => {
          'use server';
          logout();
          redirect('/');
        }}
      >
        Sair
      </Button>
    </div>
  );
};
