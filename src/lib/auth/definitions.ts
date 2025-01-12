import { ActionResponse, Fields } from '@/@types/actions';

export type SignUpFields = Fields<{ name: string; email: string; password: string; acceptedTerm: string }>;
export type SignUpResponse = ActionResponse<SignUpFields>;

export type SignInFields = Fields<{ email: string; password: string }>;
export type SignInResponse = ActionResponse<SignInFields>;
