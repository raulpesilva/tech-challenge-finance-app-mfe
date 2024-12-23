import { cookies } from 'next/headers';
import { sign } from './utils';

export async function login(formData: FormData) {
  // Verify credentials && get the user
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const acceptedTerm = formData.get('acceptedTerm') as string;

  if (!email) throw new Error('Invalid email');
  if (!password) throw new Error('Invalid password');

  const user = { email, name, acceptedTerm };

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await sign({ user, expires });

  // Save the session in a cookie
  (await cookies()).set('session', session, { expires, httpOnly: true });
}
