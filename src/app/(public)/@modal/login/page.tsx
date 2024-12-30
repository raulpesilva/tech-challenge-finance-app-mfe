import { signIn } from '@/lib/auth/signIn';

export default function Page() {
  return (
    <div>
      <h2>Login</h2>
      <p>Welcome to the login page</p>
      <form
        action={async (formData) => {
          'use server';
          await signIn(formData);
        }}
        autoComplete='on'
      >
        <label>
          Email:
          <input name='email' type='email' />
        </label>
        <label>
          Password:
          <input name='password' type='password' />
        </label>
        <button type='submit'>Entrar</button>
      </form>
    </div>
  );
}
