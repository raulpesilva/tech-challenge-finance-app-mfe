'user server';
import 'server-only';

import { cache } from 'react';
import { verifySession } from './session';

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  return session;
});
