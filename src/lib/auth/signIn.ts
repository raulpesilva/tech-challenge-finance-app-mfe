'user server';

import { getUserByEmail } from '@/actions/services/users';
import { redirect } from 'next/navigation';
import { SignInFields, SignInResponse } from './definitions';
import { userDTO } from './DTO/user';
import { createSession } from './session';
import { comparePassword, createResponseError } from './utils';

export async function signIn(_: SignInResponse, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  console.log(JSON.stringify({ inicial: true, email, password }, null, 2));

  const fields: SignInFields = {
    inputs: { email, password },
    errors: {},
  };

  if (!email) fields.errors.email = ['Email is required'];
  if (!password) fields.errors.password = ['Password is required'];

  const hasErrors = !!Object.keys(fields.errors).length;
  const response = { ...fields, success: !hasErrors } satisfies SignInResponse;
  console.log(JSON.stringify({antesError: response}, null, 2));
  if (hasErrors) return response;

  const [privateUser] = await getUserByEmail(email);
  if (!privateUser) return await createResponseError(response, 'Invalid login credentials.');

  const match = await comparePassword(password, privateUser.password);
  if (!match) return await createResponseError(response, 'Invalid login credentials.');

  const publicUser = userDTO(privateUser);
  await createSession(publicUser);
  console.log(JSON.stringify({ final: response }, null, 2));

  redirect('/dashboard');
}
