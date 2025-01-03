import { TIME } from '@/constants/time';
import { SignInResponse, SignUpResponse } from './definitions';

export const sessionExpires = TIME.HOUR * 3;

export const InitialSignUpResponse = {
  inputs: { name: '', email: '', password: '', acceptedTerm: '' },
  errors: {},
  success: true,
} satisfies SignUpResponse;

export const InitialSignInResponse = {
  inputs: { email: '', password: '' },
  errors: {},
  success: true,
} satisfies SignInResponse;
