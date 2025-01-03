'user server';
import 'server-only';

import { createUser, getUserByEmail } from '@/actions/services/users';
import { redirect } from 'next/navigation';
import { RegisterFields, RegisterResponse } from './definitions';
import { userDTO } from './DTO/user';
import { createSession } from './session';
import { createResponseError, hashPassword } from './utils';

export async function signUp(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const acceptedTerm = formData.get('acceptedTerm') as string;

  const fields: RegisterFields = {
    inputs: { name, email, password, acceptedTerm },
    erros: {},
  };

  if (!name) fields.erros.name = ['Name is required'];
  if (!email) fields.erros.email = ['Email is required'];
  if (!password) fields.erros.password = ['Password is required'];
  if (!acceptedTerm) fields.erros.acceptedTerm = ['You must accept the terms'];

  const response = { ...fields, success: !Object.keys(fields.erros).length } as RegisterResponse;
  if (Object.keys(fields.erros).length) return response;

  const user = await getUserByEmail(email);
  if (user.length)
    return await createResponseError(response, 'Email already exists, please use a different email or login.');

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
