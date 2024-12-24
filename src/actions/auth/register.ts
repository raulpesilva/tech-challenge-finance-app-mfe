'user server';

import { PublicUser } from '../../@types/users';
import { createUser, getUserByEmail } from '../services/users';
import { type Fields, hashPassword, sign } from './utils';

type RegisterFields = Fields<{
  name: string;
  email: string;
  password: string;
  acceptedTerm: string;
}>;

type RegisterResponse = RegisterFields & {
  success?: boolean;
  message?: string;
};

export const InitialRegisterResponse = {
  inputs: { name: '', email: '', password: '', acceptedTerm: '' },
  erros: {},
  success: false,
} as RegisterResponse;

export async function createAccount(formData: FormData) {
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
  // if (!acceptedTerm) fields.erros.acceptedTerm = ['You must accept the terms'];

  const response = { ...fields, success: !Object.keys(fields.erros).length } as RegisterResponse;

  if (Object.keys(fields.erros).length) return response;

  const user = await getUserByEmail(email);

  if (user.length) return { ...response, success: false, message: 'Email already in use' };

  const normalizedUser = {
    email: email.toLowerCase(),
    password: await hashPassword(password),
    name: name.toLowerCase(),
    acceptedTerm: acceptedTerm === 'true',
  };

  const newUser = await createUser(normalizedUser);

  const publicUser = {
    id: newUser.id,
    email: newUser.email,
    name: newUser.name,
  } satisfies PublicUser;

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await sign({ user: publicUser, expires });

  // Save the session in a cookie
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  cookieStore.set('session', session, { expires, httpOnly: true });
  return { ...response, success: true };
}
