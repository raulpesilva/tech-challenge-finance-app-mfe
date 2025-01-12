'user server';
import 'server-only';

import { getUserByEmail } from '@/services/users';
import { redirect } from 'next/navigation';
import { SignInFields, SignInResponse } from './definitions';
import { userDTO } from './DTO/user';
import { createSession } from './session';
import { comparePassword, createResponseError } from './utils';

export async function signIn(_: SignInResponse, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const fields: SignInFields = {
    inputs: { email, password },
    errors: {},
  };

  if (!email) fields.errors.email = ['E-mail é obrigatório'];
  if (!password) fields.errors.password = ['Senha é obrigatória'];

  const hasErrors = !!Object.keys(fields.errors).length;
  const response = { ...fields, success: !hasErrors } satisfies SignInResponse;
  if (hasErrors) return response;

  const [privateUser] = await getUserByEmail(email);
  if (!privateUser) return await createResponseError(response, 'Credenciais de login inválidas.');

  const match = await comparePassword(password, privateUser.password);
  if (!match) return await createResponseError(response, 'Credenciais de login inválidas.');

  const publicUser = userDTO(privateUser);
  await createSession(publicUser);

  redirect('/dashboard');
}
