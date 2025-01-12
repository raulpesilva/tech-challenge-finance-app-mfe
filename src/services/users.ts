'use server';
import { PrivateUser } from '@/@types/users';
import { hashPassword } from '@/lib/auth/utils';

const BASE_URL = `${process.env.REACT_API_URL}/users`;

export const createUser = async (user: Omit<PrivateUser, 'id'>) => {
  'use server';
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  return response.json() as Promise<PrivateUser>;
};

export const getUserByEmail = async (email: string) => {
  'use server';

  const response = await fetch(`${BASE_URL}?email=${email}`);
  return response.json() as Promise<PrivateUser[]>;
};

export const getUserById = async (id: string) => {
  'use server';

  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json() as Promise<PrivateUser>;
};

export const updateUser = async (user: Partial<PrivateUser>) => {
  'use server';

  const privateUser: Partial<PrivateUser> = {};
  if (user.name) privateUser.name = user.name;
  if (user.email) privateUser.email = user.email;
  if (user.password) privateUser.password = await hashPassword(user.password);

  const response = await fetch(`${BASE_URL}/${user.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(privateUser),
  });

  return response.json() as Promise<PrivateUser>;
};
