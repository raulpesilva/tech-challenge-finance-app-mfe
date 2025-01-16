'use server';

import { ActionResponse, Fields } from '@/@types/actions';
import { PrivateUser } from '@/@types/users';
import { getUser } from '@/lib/auth/getUser';
import { updateUser } from '@/services/users';
import { revalidatePath } from 'next/cache';

export type UpdateUserFields = Fields<{ name: string; email: string; password: string }>;
export type UpdateUserResponse = ActionResponse<UpdateUserFields>;

export const updateUserAction = async (_state: UpdateUserResponse, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const fields: UpdateUserFields = {
    inputs: { name, email, password },
    errors: {},
  };

  if (!name) fields.errors.name = ['Nome é obrigatório'];
  if (!email) fields.errors.email = ['E-mail é obrigatório'];

  const response = { ...fields, success: !Object.keys(fields.errors).length } as UpdateUserResponse;
  if (Object.keys(fields.errors).length) return response;

  const publicUser = await getUser();
  if (!publicUser) return { ...response, success: false, errors: { email: ['Usuário não encontrado'] } };

  const user: Partial<PrivateUser> = {
    id: publicUser.id,
    name,
    email,
    password,
  };

  try {
    await updateUser(user);
    revalidatePath('/dashboard/account');
    return { ...response, success: true };
  } catch {
    return { ...response, success: false, errors: { email: ['Erro ao atualizar usuário'] } };
  }
};
