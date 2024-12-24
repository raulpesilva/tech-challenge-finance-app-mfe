'use server';

import { compare, genSalt, hash } from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';

export interface Fields<T extends Record<string, any>> {
  inputs: { [K in keyof T]?: T[K] };
  erros: { [K in keyof T]?: string[] };
}

const secret = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secret);

export async function sign(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function verify(input: string | undefined = ''): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] });
    return payload;
  } catch (error) {
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
