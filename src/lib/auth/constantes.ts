import { TIME } from '@/constants/time';
import { RegisterResponse, SignInResponse } from './definitions';

export const sessionExpires = TIME.HOUR * 3;

export const InitialRegisterResponse = {
  inputs: { name: '', email: '', password: '', acceptedTerm: '' },
  errors: {},
  success: true,
} satisfies RegisterResponse;

export const InitialSignInResponse = {
  inputs: { email: '', password: '' },
  errors: {},
  success: true,
} satisfies SignInResponse;
