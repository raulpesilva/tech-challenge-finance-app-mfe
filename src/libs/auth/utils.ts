import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';

export interface Fields<T extends Record<string, any>> {
  inputs: { [K in keyof T]?: T[K] };
  erros: { [K in keyof T]?: string[] };
}

const secret = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secret);

export async function sign(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key);
}

export async function verify(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, { algorithms: ['HS256'] });
  return payload;
}

export function hash(input: string) {
  const salt = genSaltSync(10);
  return hashSync(input, salt);
}

export function compare(input: string, hash: string) {
  return compareSync(input, hash);
}
