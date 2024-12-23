import { PublicUser } from '@/@types/users';
import { createUser, getUserByEmail } from '@/services/users';
import { cookies } from 'next/headers';
import { type Fields, hash, sign } from './utils';

type RegisterFields = Fields<{
  email: string;
  password: string;
  acceptedTerm: string;
}>;

type RegisterResponse = RegisterFields & {
  success?: boolean;
};

export async function register(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const acceptedTerm = formData.get('acceptedTerm') as string;

  const fields: RegisterFields = {
    inputs: { email, password, acceptedTerm },
    erros: {},
  };

  if (!email) fields.erros.email = ['Email is required'];
  if (!password) fields.erros.password = ['Password is required'];
  if (!acceptedTerm) fields.erros.acceptedTerm = ['You must accept the terms'];

  const response = { ...fields, success: !Object.keys(fields.erros).length } as RegisterResponse;

  if (Object.keys(fields.erros).length) return response;

  const user = await getUserByEmail(email);
  if (user) throw new Error('User already exists');

  const normalizedUser = {
    email: email.toLowerCase(),
    password: hash(password),
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
  (await cookies()).set('session', session, { expires, httpOnly: true });
}
