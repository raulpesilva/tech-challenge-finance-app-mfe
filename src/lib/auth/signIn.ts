'user server';
import 'server-only';

import { getUserByEmail } from '@/actions/services/users';
import { redirect } from 'next/navigation';
import { LoginFields, LoginResponse } from './definitions';
import { userDTO } from './DTO/user';
import { createSession } from './session';
import { comparePassword, createResponseError } from './utils';

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const fields: LoginFields = {
    inputs: { email, password },
    erros: {},
  };

  if (!email) fields.erros.email = ['Email is required'];
  if (!password) fields.erros.password = ['Password is required'];

  const response = { ...fields, success: !Object.keys(fields.erros).length } satisfies LoginResponse;
  if (Object.keys(fields.erros).length) return response;

  const [privateUser] = await getUserByEmail(email);
  if (!privateUser) return await createResponseError(response, 'Invalid login credentials.');

  const match = await comparePassword(privateUser.password, password);
  if (match) return await createResponseError(response, 'Invalid login credentials.');

  const publicUser = userDTO(privateUser);
  await createSession(publicUser);
  redirect('/dashboard');
}
