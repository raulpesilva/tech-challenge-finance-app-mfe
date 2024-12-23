import { PrivateUser } from '@/@types/users';

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
  return response.json() as Promise<PrivateUser>;
};
