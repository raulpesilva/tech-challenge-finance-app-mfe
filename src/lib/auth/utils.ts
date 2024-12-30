'user server';
import 'server-only';

import { compare, genSalt, hash } from 'bcrypt';
import { ActionResponse } from './definitions';

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
