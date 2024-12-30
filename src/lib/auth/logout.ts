'user server';
import 'server-only';

import { redirect } from 'next/navigation';
import { deleteSession } from './session';

export const logout = async () => {
  await deleteSession();
  redirect('/');
};
