'use server';

import { compare, genSalt, hash } from 'bcrypt';
import { JWTPayload, jwtVerify, SignJWT } from 'jose';

export interface Fields<T extends Record<string, unknown>> {
  inputs: { [K in keyof T]?: T[K] };
  erros: { [K in keyof T]?: string[] };
}

const secret = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secret);

export async function sign(payload: unknown) {
  return await new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function verify(input: string | undefined = ''): Promise<unknown> {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    return null;
  }
}

export async function hashPassword(input: string) {
  const salt = await genSalt(10);
  return await hash(input, salt);
}

export async function comparePassword(input: string, hash: string) {
  return await compare(input, hash);
}
