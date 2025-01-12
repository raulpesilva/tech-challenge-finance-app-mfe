'user server';
import 'server-only';

import { PublicUser } from '@/@types/users';
import { getUserById } from '@/services/users';
import { cache } from 'react';
import { verifySession } from './session';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  const privateUser = await getUserById(session.id);
  const user: PublicUser = { id: privateUser.id, name: privateUser.name, email: privateUser.email };
  return user;
});
