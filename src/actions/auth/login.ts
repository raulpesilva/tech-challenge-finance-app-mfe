'user server';

import { PublicUser } from '@/@types/users';
import { getUserByEmail } from '@/actions/services/users';
import { cookies } from 'next/headers';
import { comparePassword, Fields, sign } from './utils';

type LoginFields = Fields<{
  email: string;
  password: string;
}>;

type LoginResponse = LoginFields & {
  success?: boolean;
  message?: string;
};

export async function login(formData: FormData) {
  // Verify credentials && get the user
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const fields: LoginFields = {
    inputs: { email, password },
    erros: {},
  };

  if (!email) fields.erros.email = ['Email is required'];
  if (!password) fields.erros.password = ['Password is required'];

  const response = { ...fields, success: !Object.keys(fields.erros).length } as LoginResponse;
  if (Object.keys(fields.erros).length) return response;

  const [privateUser] = await getUserByEmail(email);

  if (!privateUser) {
    return {
      ...response,
      success: false,
      message: 'Email or Password is wrong',
    };
  }

  // Verify password
  if (await comparePassword(privateUser.password, password)) {
    return {
      ...response,
      success: false,
      message: 'Email or Password is wrong',
    };
  }

  const publicUser = {
    id: privateUser.id,
    email: privateUser.email,
    name: privateUser.name,
  } satisfies PublicUser;

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await sign({ user: publicUser, expires });
  // Save the session in a cookie
  const cookieStore = await cookies();
  console.log('session', session);
  cookieStore.set('session', session, { httpOnly: true, secure: true, expires: expires, sameSite: 'lax', path: '/' });
  return response;
}
