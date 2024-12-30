import { TIME } from '@/constants/time';
import { RegisterResponse } from './definitions';

export const InitialRegisterResponse = {
  inputs: { name: '', email: '', password: '', acceptedTerm: '' },
  erros: {},
  success: false,
} satisfies RegisterResponse;

export const sessionExpires = TIME.HOUR * 3;
