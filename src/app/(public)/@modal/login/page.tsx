import { login } from '@/actions/auth/login';
import { redirect } from 'next/navigation';

export default function Page() {
  return (
    <div>
      <h2>Login</h2>
      <p>Welcome to the login page</p>
      <form
        action={async (formData) => {
          'use server';
          await login(formData);
          redirect('/dashboard');
        }}
        autoComplete="on"
      >
        <label>
          Email:
          <input name="email" type="email" />
        </label>
        <label>
          Password:
          <input name="password" type="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
