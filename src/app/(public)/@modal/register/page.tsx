import { signUp } from '@/lib/auth/signUp';
import { headers } from 'next/headers';

export default async function Page() {
  await headers();
  return (
    <div>
      <h2>Register</h2>
      <p>Welcome to the register page</p>
      <form
        action={async (formData) => {
          'use server';
          await signUp(formData);
        }}
        autoComplete='on'
      >
        <label>
          Name:
          <input name='name' type='name' />
        </label>
        <label>
          Email:
          <input name='email' type='email' />
        </label>
        <label>
          Password:
          <input name='password' type='password' />
        </label>
        <button type='submit'>Criar conta</button>
      </form>
    </div>
  );
}
