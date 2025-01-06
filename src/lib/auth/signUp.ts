'user server';
import 'server-only';

import { createUser, getUserByEmail } from '@/actions/services/users';
import { redirect } from 'next/navigation';
import { SignUpFields, SignUpResponse } from './definitions';
import { userDTO } from './DTO/user';
import { createSession } from './session';
import { createResponseError, hashPassword } from './utils';

export async function signUp(_: SignUpResponse, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const acceptedTerm = formData.get('acceptedTerm') as string;

  const fields: SignUpFields = {
    inputs: { name, email, password, acceptedTerm },
    errors: {},
  };

  if (!name) fields.errors.name = ['Nome é obrigatório'];
  if (!email) fields.errors.email = ['E-mail é obrigatório'];
  if (!password) fields.errors.password = ['Senha é obrigatória'];
  if (!acceptedTerm || acceptedTerm !== 'on') fields.errors.acceptedTerm = ['Você deve aceitar os termos'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } satisfies SignUpResponse;
  if (Object.keys(fields.errors).length) return response;

  const user = await getUserByEmail(email);
  if (user.length)
    return await createResponseError(response, 'O e-mail já existe, use um e-mail diferente ou faça login.');

  const normalizedUser = {
    name,
    email: email.toLowerCase(),
    password: await hashPassword(password),
    acceptedTerm: acceptedTerm === 'true',
  };
  const newUser = await createUser(normalizedUser);

  const publicUser = userDTO(newUser);
  await createSession(publicUser);
  redirect('/dashboard');
}
