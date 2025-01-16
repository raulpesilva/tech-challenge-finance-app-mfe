'user server';
import 'server-only';

import { ActionResponse } from '@/@types/actions';
import { compare, genSalt, hash } from 'bcrypt';

export async function hashPassword(input: string) {
  const salt = await genSalt(10);
  return await hash(input, salt);
}

export async function comparePassword(input: string, hash: string) {
  return await compare(input, hash);
}

export async function createResponseError(response: ActionResponse, message = 'Something went wrong') {
  return { ...response, success: false, message } satisfies ActionResponse;
}
